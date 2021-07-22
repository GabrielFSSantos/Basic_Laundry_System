import './styles.scss';

type ToggleProps = {
  title: string;
}

export function Toggle({title}: ToggleProps) {
  return(
    <div id="content" >
      <label className="title">{title}</label>
      <label className="switch">
        <input type="checkbox"/>
        <span className="slider round"/>
      </label>
    </div>
  );
}