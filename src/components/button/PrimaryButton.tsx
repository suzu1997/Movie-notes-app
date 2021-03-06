import { memo, MouseEventHandler, ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const PrimaryButton: VFC<Props> = memo((props) => {
  const { children, onClick } = props;
  return (
    <button
      className='text-white bg-green-700 text-xs sm:text-sm px-4 py-3 focus:outline-none rounded-lg hover:bg-opacity-90'
      onClick={onClick}
    >
      {children}
    </button>
  );
});
