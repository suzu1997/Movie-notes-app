import { VFC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { doc, getDoc, setDoc, serverTimestamp } from 'firebase/firestore';
import { db } from 'src/firebase';

import { signUpWithEmailAndPassword } from 'src/firebase/auth';

type Props = {
  setIsLogin: (boolean: boolean) => void;
};

type Inputs = {
  email: string;
  passward: string;
};

export const SignUp: VFC<Props> = (props) => {
  const { setIsLogin } = props;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async ({ email, passward }) => {
    try {
      const user = await signUpWithEmailAndPassword(email, passward);
      if (!user) {
        throw new Error('ユーザー登録に失敗しました');
      }
      const docRef = doc(db, 'users', user.user.uid);
      const userDoc = await getDoc(docRef);

      if (!userDoc.exists()) {
        // Firestore にユーザー用のドキュメントが作られていなければ作る
        await setDoc(doc(db, 'users', user.user.uid), {
          userId: user.user.uid,
          email: user.user.email,
          created_at: serverTimestamp(),
        });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='font-bold text-lg mb-10'>ユーザー登録</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-11/12 flex flex-col max-w-lg'
        >
          {/* register your input into the hook by invoking the "register" function */}
          <label>メールアドレス</label>
          <input
            className='w-full p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
            placeholder='メールアドレスを入力してください'
            type='text'
            name='email'
            {...register('email', { required: true })}
          />
          {errors.email ? (
            <span className='text-red-400'>※必須項目です</span>
          ) : null}
          {/* include validation with required or other standard HTML validation rules */}
          <label className='mt-8'>
            パスワード<span className='text-sm'> ※6文字以上</span>
          </label>
          <input
            className='w-full p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black'
            placeholder='パスワードを入力してください'
            type='password'
            {...register('passward', { required: true, minLength: 6 })}
          />
          {/* errors will return when field validation fails  */}
          {errors.passward?.type === 'required' ? (
            <span className='text-red-400'>※必須項目です</span>
          ) : null}
          {errors.passward?.type === 'minLength' ? (
            <span className='text-red-400'>※6文字以上で設定してください</span>
          ) : null}
          <br />
          <input
            type='submit'
            value='登録'
            className='text-white bg-green-700 text-xs sm:text-sm px-4 py-3 focus:outline-none rounded-lg hover:bg-opacity-90 w-20 m-auto mt-6'
          />
        </form>
        <button
          className='text-blue-600 underline mt-6 hover:text-gray-600'
          onClick={() => setIsLogin(true)}
        >
          登録済みの方はこちら
        </button>
      </div>
    </>
  );
};
