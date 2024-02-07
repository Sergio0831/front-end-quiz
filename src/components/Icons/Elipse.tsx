type ElipseProps = {
  className: string;
};

// const ElipseIcon = ({ className }: ElipseProps) => {
//   return (
//     <svg
//       className={className}
//       width="977"
//       height="978"
//       viewBox="0 0 977 978"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg">
//       <circle
//         cx="488.5"
//         cy="488.538"
//         r="416.5"
//         stroke="var(--body-bg-pattern)"
//         stroke-width="144"
//       />
//     </svg>
//   );
// };
const ElipseIcon = ({ className }: ElipseProps) => {
  return (
    <svg
      width="540"
      height="608"
      viewBox="0 0 540 608"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg">
      <circle cx="488.5" cy="488.5" r="416.5" stroke="var(--body-bg-pattern)" strokeWidth="144" />
    </svg>
  );
};

export default ElipseIcon;
