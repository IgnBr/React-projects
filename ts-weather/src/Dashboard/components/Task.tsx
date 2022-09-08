import moment from "moment";
import "./css/Task.css";

function Task({ task: { dueTo, title, tags } }: any) {
  let targetDays = moment(dueTo).diff(moment(), "days");
  const postfix = targetDays < 0 ? "due" : "left";
  const color = targetDays < 0 ? "rgb(241, 101, 101)" : "#4ac767";
  targetDays = Math.abs(targetDays);
  const cutTitle = title.substring(0, 50) + "...";

  const tagDivs = tags.map((tag: string) => (
    <div className="tag" key={tag}>
      {tag}
    </div>
  ));

  return (
    <div className="Task">
      <div className="dueIcon" style={{ backgroundColor: color }}>
        <div className="days">{targetDays}d </div>
        <div className="postfix">{postfix}</div>
      </div>
      <div className="title">{cutTitle}</div>
      <div className="tags">{tagDivs}</div>
    </div>
  );
}

export default Task;
