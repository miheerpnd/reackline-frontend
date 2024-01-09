import React from "react";
import ListProps from "./ListProps";
function SoccerData() {
  const Data = [
    { id: "2", name: "inglend v Ingland", game: "in-paly" ,link:"/Fullmarket" },
    { id: "3", name: "India v Ingland", game: "in-paly" ,link:"/Fullmarket"},
    { id: "4", name: "Pakistan v Ingland", game: "in-paly" ,link:"/Fullmarket"},
    { id: "5", name: "India v Ingland", game: "in-paly" ,link:"/Fullmarket"},
    { id: "6", name: "India v Ingland", game: "in-paly" ,link:"/Fullmarket"},
    { id: "7", name: "India v Ingland", game: "in-paly" ,link:"/Fullmarket"},
    { id: "8", name: "India v Ingland", game: "in-paly" ,link:"/Fullmarket"},
  ];
  return (
    <div>
      {Data.map((e) => {
        return <ListProps name={e.name} play={e.game} Link={e.link} />;
      })}
    </div>
  );
}
export default SoccerData;
