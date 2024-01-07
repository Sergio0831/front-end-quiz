import { CategoryType } from '@/lib/definitions';
import classes from './styles.module.css';
import clsx from 'clsx';

type CategoryProps = {
  category: CategoryType;
};

const Category = ({ category }: CategoryProps) => {
  const categoryIconClasses = clsx({
    [classes.category__icon]: true,
    [classes['category__icon--html']]: category.title === 'HTML',
    [classes['category__icon--css']]: category.title === 'CSS',
    [classes['category__icon--js']]: category.title === 'JavaScript',
    [classes['category__icon--accessibility']]: category.title === 'Accessibility',
  });

  return (
    <div className={`${classes.category} center-y`}>
      <span className={`${categoryIconClasses} center`}>{category.icon}</span>
      <span className="heading-s">{category.title}</span>
    </div>
  );
};

export default Category;
