export default function DiceComp(props) {
  return (
    <button
      className="
     border-none
    px-2 m-1 rounded text-xl
     cursor-pointer shadow-[2px_3px_3px_rgba(0,0,0,0.5)]"
    >
      {props.value}
    </button>
  );
}
