import React from "react";

const Post = React.forwardRef(({ item }, ref) => {
  const itemBody = (
    <>
      <h2>{item.name}</h2>
      <p>{item.id}</p>
      {/* <h2>{item.title}</h2>
      <p>{item.id}</p> */}
    </>
  );

  const content = ref ? <div ref={ref}>{itemBody}</div> : <div>{itemBody}</div>;

  return content;
});

export default Post;
