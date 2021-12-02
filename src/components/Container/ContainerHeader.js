import s from "./Container.module.css";

function ContainerHeader({ title, children }) {
  return (
    <div className={s.ContainerHeader}>
      <h2 className={s.title}>{title}</h2>
      {children}
    </div>
  );
}

export default ContainerHeader;
