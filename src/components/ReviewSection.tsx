import React, { useState, useEffect, useMemo } from 'react';
import { 
  collection, 
  query, 
  where, 
  onSnapshot, 
  addDoc, 
  serverTimestamp,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../services/firebase';
import { useAuth } from '../context/AuthContext';
import { Star, MessageSquare, Send, CheckCircle2, User as UserIcon, LogIn, AlertCircle } from 'lucide-react';

interface Review {
  id: string;
  productSlug: string;
  userId: string;
  userName: string;
  userAvatar: string;
  rating: number;
  comment: string;
  createdAt: Timestamp | null;
}

interface ReviewSectionProps {
  articleSlug: string;
  articleTitle: string;
}

export const ReviewSection: React.FC<ReviewSectionProps> = ({ articleSlug, articleTitle }) => {
  const { user, signInWithGoogle } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedRating, setSelectedRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [commentText, setCommentText] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const storageSlug = `m2s_${articleSlug}`;

  useEffect(() => {
    setLoading(true);
    setErrorMessage(null);

    try {
      const reviewsRef = collection(db, 'reviews');
      const q = query(
        reviewsRef,
        where('productSlug', '==', storageSlug)
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const items: Review[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          items.push({
            id: doc.id,
            productSlug: data.productSlug,
            userId: data.userId,
            userName: data.userName || 'Sinh viên / Độc giả',
            userAvatar: data.userAvatar || '',
            rating: data.rating || 5,
            comment: data.comment || '',
            createdAt: data.createdAt || null,
          });
        });

        items.sort((a, b) => {
          const tA = a.createdAt?.toMillis ? a.createdAt.toMillis() : ((a.createdAt as any)?.seconds ? (a.createdAt as any).seconds * 1000 : 0);
          const tB = b.createdAt?.toMillis ? b.createdAt.toMillis() : ((b.createdAt as any)?.seconds ? (b.createdAt as any).seconds * 1000 : 0);
          return tB - tA;
        });

        setReviews(items);
        setLoading(false);
      }, (error) => {
        console.warn('Firestore reviews fetch notice:', error.message);
        setLoading(false);
      });

      return () => unsubscribe();
    } catch (err: any) {
      console.warn('Firestore setup error:', err);
      setLoading(false);
    }
  }, [storageSlug]);

  const averageRating = useMemo(() => {
    if (reviews.length === 0) return 5.0;
    const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
    return (sum / reviews.length).toFixed(1);
  }, [reviews]);

  const ratingDescriptions: { [key: number]: string } = {
    1: 'Cần bổ sung thêm ví dụ',
    2: 'Tạm ổn — Cần giải thích sâu hơn',
    3: 'Khá hữu ích cho việc học',
    4: 'Rất tốt — Dễ áp dụng thực tế',
    5: 'Tuyệt vời — Kiến thức thực chiến rất giá trị!'
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);

    if (!user) {
      await signInWithGoogle();
      return;
    }

    if (!commentText.trim()) {
      alert('Vui lòng nhập nội dung thảo luận hoặc câu hỏi của bạn.');
      return;
    }

    setSubmitting(true);
    try {
      await addDoc(collection(db, 'reviews'), {
        productSlug: storageSlug,
        productTitle: articleTitle,
        userId: user.uid,
        userName: user.displayName || user.email?.split('@')[0] || 'Sinh viên Marketing',
        userAvatar: user.photoURL || '',
        rating: selectedRating,
        comment: commentText.trim(),
        createdAt: serverTimestamp(),
      });

      setCommentText('');
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: any) {
      console.error('Error adding review:', error);
      setErrorMessage(`Không thể gửi bình luận lúc này: ${error.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white rounded-2xl border border-slate-200 shadow-soft p-6 sm:p-8 mt-8">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-brand-600" />
            <h2 className="text-lg sm:text-xl font-bold text-ink-900 tracking-tight">
              Thảo Luận Học Thuật & Giải Bài Tập Thực Hành
            </h2>
          </div>
          <p className="text-xs text-ink-500 mt-1">
            Đặt câu hỏi, nộp kết quả bài tập thực hành hoặc chia sẻ góc nhìn của bạn về chủ đề này
          </p>
        </div>

        {/* Rating Badge */}
        <div className="flex items-center gap-3 bg-brand-50/80 border border-brand-200 px-4 py-2 rounded-xl shrink-0">
          <div className="text-2xl font-black text-brand-600">
            {averageRating}
          </div>
          <div>
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3.5 h-3.5 ${
                    star <= Math.round(Number(averageRating))
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="text-[11px] font-medium text-ink-600 mt-0.5">
              {reviews.length} thảo luận từ sinh viên & độc giả
            </div>
          </div>
        </div>
      </div>

      {/* Submission Box */}
      <div className="my-6 p-5 bg-slate-50/70 border border-slate-200/80 rounded-xl">
        <h3 className="text-sm font-bold text-ink-900 mb-3 flex items-center gap-2">
          <span>Gửi thảo luận hoặc bài giải thực hành của bạn</span>
          {user && (
            <span className="text-[11px] font-normal text-ink-500">
              (Đang đăng nhập: <strong>{user.displayName || user.email}</strong>)
            </span>
          )}
        </h3>

        <div className="mb-4">
          <label className="block text-xs font-medium text-ink-700 mb-1.5">
            Đánh giá mức độ hữu ích của bài viết:
          </label>
          <div className="flex items-center gap-1.5 flex-wrap">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                type="button"
                key={star}
                onClick={() => setSelectedRating(star)}
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                className="p-1 hover:scale-110 transition-transform focus:outline-none"
              >
                <Star
                  className={`w-5 h-5 transition-colors ${
                    star <= (hoverRating || selectedRating)
                      ? 'fill-amber-400 text-amber-400'
                      : 'text-slate-300'
                  }`}
                />
              </button>
            ))}
            <span className="text-xs font-semibold text-brand-700 ml-2">
              {ratingDescriptions[hoverRating || selectedRating]}
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <textarea
              rows={3}
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Chia sẻ câu trả lời cho phần Bài tập thực hành, đặt câu hỏi cho giảng viên hoặc ghi chú bài học tâm đắc..."
              className="w-full text-xs sm:text-sm p-3.5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-brand-500/20 focus:border-brand-600 focus:outline-none placeholder:text-ink-400 text-ink-900 transition-all resize-y"
              required
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="text-[11px] text-ink-500">
              * Thảo luận văn minh, khuyến khích trích dẫn số liệu và tình huống thực tế.
            </div>

            {user ? (
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold text-xs transition-colors shadow-xs disabled:opacity-50 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{submitting ? 'Đang gửi...' : 'Gửi thảo luận'}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={signInWithGoogle}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-ink-900 font-semibold text-xs transition-colors shadow-2xs cursor-pointer"
              >
                <LogIn className="w-4 h-4 text-brand-600" />
                <span>Đăng nhập Google để thảo luận</span>
              </button>
            )}
          </div>

          {errorMessage && (
            <div className="mt-3 p-3.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-600 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {submitSuccess && (
            <div className="mt-3 p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
              <span>Cảm ơn bạn! Thảo luận của bạn đã được đăng thành công.</span>
            </div>
          )}
        </form>
      </div>

      {/* Comments List */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-ink-800">
          Tất cả thảo luận ({reviews.length})
        </h3>

        {loading ? (
          <div className="py-8 text-center text-xs text-ink-400">
            Đang tải thảo luận...
          </div>
        ) : reviews.length > 0 ? (
          <div className="divide-y divide-slate-100">
            {reviews.map((rev) => (
              <div key={rev.id} className="py-4 first:pt-0 last:pb-0">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    {rev.userAvatar ? (
                      <img
                        src={rev.userAvatar}
                        alt={rev.userName}
                        className="w-8 h-8 rounded-full object-cover border border-slate-200"
                      />
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-brand-100 border border-brand-200 flex items-center justify-center text-brand-700 font-bold text-xs">
                        {rev.userName.charAt(0).toUpperCase()}
                      </div>
                    )}
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-ink-900">{rev.userName}</span>
                        <span className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-200/80 px-1.5 py-0.2 rounded font-medium">
                          Đã xác thực
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-0.5">
                        <div className="flex items-center">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`w-3 h-3 ${
                                s <= rev.rating
                                  ? 'fill-amber-400 text-amber-400'
                                  : 'text-slate-200'
                              }`}
                            />
                          ))}
                        </div>
                        {rev.createdAt && (
                          <span className="text-[10px] text-ink-400">
                            • {new Date(rev.createdAt.toDate ? rev.createdAt.toDate() : (rev.createdAt as any).seconds ? (rev.createdAt as any).seconds * 1000 : Date.now()).toLocaleDateString('vi-VN')}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-xs text-ink-700 leading-relaxed pl-10">
                  {rev.comment}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="py-8 text-center bg-slate-50/50 rounded-xl border border-dashed border-slate-200 p-6">
            <UserIcon className="w-8 h-8 text-slate-300 mx-auto mb-2" />
            <p className="text-xs font-medium text-ink-700">Chưa có thảo luận nào cho bài viết này.</p>
            <p className="text-[11px] text-ink-500 mt-1">
              Hãy là người đầu tiên chia sẻ lời giải bài tập thực hành hoặc góc nhìn Marketing của bạn!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
