import clsx from 'clsx';

function Footer() {
  return (
    <footer className={clsx('flex w-full flex-col items-center', 'py-8')}>
      <span
        className={clsx(
          'text-xs font-light text-neutral-800 dark:text-neutral-300'
        )}
      >
        © Published by Wonse
      </span>
    </footer>
  );
}

export default Footer;
