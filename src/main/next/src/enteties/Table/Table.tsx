


export const Table = () => {
  const data = {
    title: "Мурманск",
    dataset: [{ id: 1, row: "Число больничных коек, шт", value: "3564" }],
  }
  return (
    <div className="table">
      <table title={data.title}>
        <tr>{data.title}</tr>
        {data.dataset.map((d) => {
          return (
            <td key={d.id}>
              <th>{d.row}</th>
              <tr>{d.value}</tr>
            </td>
          )
        })}
      </table>
    </div>
  )
}
