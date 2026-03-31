import FileUpload from "./Upload/components/FileUpload/FileUpload"
import WrisleTable from "./Upload/components/WrisleTable/WrisleTable";
import { tableAdapter } from "./Upload/components/WrisleTable/utilis/tableAdapter";
import { useData } from "./Upload/stores/useData";
import styles from './App.module.scss'

function App() {
  const dataSets = useData((state)=>state.dataSets);
  const tableData = Object.keys(dataSets).map(k=>({
      id:dataSets[k].id,
      title:dataSets[k].title,
      data:tableAdapter(dataSets[k].data)
  }))

  console.log('this is tabledata', tableData)
 
  return (
    <main className={styles.canvasCont}>
      <FileUpload label={'Upload a CSV Document'} />

      {
        tableData.map(t=>(
          <article key={t.id}>
            <h3>{t.title}</h3>
            <WrisleTable columns={t.data.columns} rows={t.data.rows.slice(0,100)} />
          </article>
        ))
      }

    </main>
  )
}

export default App
