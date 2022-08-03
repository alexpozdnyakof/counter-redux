import styles from './button.module.css';

type ButtonProps = {
  children: string;
  variant: 'primary' | 'secondary'
  testId: string
  onClick: ( ) => any;
}

export default function Button({children,
  variant = 'primary',
  testId,
  onClick
}: Partial<ButtonProps>) {
  const cssClasses = [styles.Button,styles['Button_variant_'.concat(variant)]].join(" ");

  return (
    <button className={cssClasses} data-testid={testId} onClick={onClick}>
      {children}
    </button>
  )

}
