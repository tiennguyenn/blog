const Item = ({id, title, subtitle, user, created_at}) => {
  return (
    <>
      <div className="post-preview">
        <a href={`/post/${id}`}>
          <h2 className="post-title">
            {title}
          </h2>
          <h3 className="post-subtitle">
            {subtitle}
          </h3>
        </a>
        <p className="post-meta">
          Posted by <a href="/user">{user}</a> on {created_at}
        </p>
      </div>
      <hr />
    </>
  )
}

export default Item