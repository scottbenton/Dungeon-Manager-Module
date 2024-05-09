import clsx from "clsx";

export interface GridListProps<T> {
  className?: string;
  items: T[];
  renderItem: (item: T) => JSX.Element;
}

export function GridList<T>(props: GridListProps<T>) {
  const { className, items, renderItem } = props;

  return (
    <ul
      className={clsx(
        className,
        "grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
      )}
    >
      {items.map((item, index) => (
        <li key={index} className={"flex items-stretch"}>
          {renderItem(item)}
        </li>
      ))}
    </ul>
  );
}
