export default function SessionsList ({ session }) {
  return (
    <div>
      {
        session.map(item => {
          return (
            <div key={item._id}>
              <p>{item.sport}</p>
              <p>{item.description}</p>
              <p>{item.place}</p>
            </div>
          )
        })
      }
    </div>
  )
}
