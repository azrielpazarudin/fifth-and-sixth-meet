import { useState } from 'react'
import Servant from './components/Servant'
import {BsPlus} from 'react-icons/bs'
import {BsWrench} from 'react-icons/bs'
import {BsFillClipboard2XFill}from 'react-icons/bs'
let found = false;
function App() {
  const [addBuffer, setAddBuffer] = useState({ id: '', name: '', star: '' });
  const [editBuffer, setEditBuffer] = useState({ id: '', name: '', star: '' });
  const [deleteBuffer, setDeleteBuffer] = useState({ id: '', name: '', star: '' });

  const [servants, setServants] = useState([{
    id: 1,
    name: "Vlad III The Dracula",
    star: 5,

  }, {
    id: 2,
    name: "Sakata Kintoki Rider",
    star: 4
  }, , {
    id: 3,
    name: "Hassan Of The Hundred Personas",
    star: 3
  }, {
    id: 4,
    name: "Chen Gong",
    star: 2
  }, {
    id: 5,
    name: "Oda Nobutatsu",
    star: 1
  }, {
    id: 6,
    name: "Angra Mainyu",
    star: 0
  }])

  function addChangeHandle(e) {
    setAddBuffer({
      ...addBuffer,
      [e.target.name]: e.target.value
    })
  }
  function editChangeHandle(e) {
    setEditBuffer({
      ...editBuffer,
      [e.target.name]: e.target.value
    })
  }
  function deleteChangeHandle(e) {
    setDeleteBuffer({
      ...deleteBuffer,
      [e.target.name]: e.target.value
    })
  }

  function showAddTextField() {
    return (
      <>
        <br />
        <center>
          <h2>ADD <BsPlus/></h2>
          <div style={{ backgroundColor: 'brown', width: '300px', padding: '5px' }}>
            <div style={{ backgroundColor: 'brown', justifyContent: 'space-between', display: 'inline-grid', gridTemplateColumns: 'auto auto', padding: 10, margin: 'auto' }}>
              <label style={{ color: 'white' }}>Id   </label><input type="text" value={addBuffer.id} name='id' onChange={addChangeHandle} />
              <label style={{ color: 'white' }}>Nama</label><input type="text" value={addBuffer.name} name='name' onChange={addChangeHandle} />
              <label style={{ color: 'white' }}>Star</label><input type="text" value={addBuffer.star} name='star' onChange={addChangeHandle} />
            </div>
            <button style={{ margin: 5, padding: 10 }} name='depan' onClick={crudHandle}>Tambah Depan</button>
            <button style={{ margin: 5, padding: 10 }} name='belakang' onClick={crudHandle}>Tambah Belakang</button>
          </div>
        </center>

      </>

    )
  }

  function showEditTextField() {
    return (
      <>
        <br />
        <center>
          <h2>EDIT <BsWrench /></h2>
          <div style={{ backgroundColor: 'brown', width: '300px', padding: '5px' }}>
            <div style={{ backgroundColor: 'brown', justifyContent: 'space-between', display: 'inline-grid', gridTemplateColumns: 'auto auto', padding: 10, margin: 'auto' }}>
              <label style={{ color: 'white' }}>Id   </label><input type="text" value={editBuffer.id} name='id' onChange={editChangeHandle} />
              <label style={{ color: 'white' }}>Nama</label><input type="text" value={editBuffer.name} name='name' onChange={editChangeHandle} />
            </div>
            <button name='edit-name-by-id' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Ubah Nama By Id</button>
            <button name='upgrade-star' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Upgrade Star</button>
            <button name='downgrade-star' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Downgrade Star</button>
          </div>
        </center>

      </>
    )
  }

  function showDeleteTextField() {
    return (
      <>
        <br />
        <center>
          <h2>DELETE <BsFillClipboard2XFill/></h2>
          <div style={{ backgroundColor: 'brown', width: '300px', padding: '5px' }}>
            <div style={{ backgroundColor: 'brown', justifyContent: 'space-between', display: 'inline-grid', gridTemplateColumns: 'auto auto', padding: 10, margin: 'auto' }}>
              <label style={{ color: 'white' }}>Id   </label><input type="text" value={deleteBuffer.id} name='id' onChange={deleteChangeHandle} />
            </div>
            <button name='delete-front' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Hapus Depan</button>
            <button name='delete-rear' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Hapus Belakang</button>
            <button name='delete-by-id' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Hapus By Id</button>
            <button name='delete-all' style={{ margin: 5, padding: 10 }} onClick={crudHandle}>Hapus Semua</button>
          </div>
        </center>

      </>
    )
  }



  function crudHandle(e) {
    const x = addBuffer;
    const y = editBuffer;
    const z = deleteBuffer;
    if (e.target.name == 'belakang') {
      setServants([...servants, x]);
    } else if (e.target.name == 'depan') {
      setServants([x, ...servants]);
    } else if (e.target.name == 'delete-front') {
      console.log(servants);
      setServants(
        servants.filter((e, index) => index != 0)
      )

      console.log(servants);
    } else if (e.target.name == 'delete-rear') {
      found = servants.length - 1
      setServants(
        servants.filter((x, index, length) => index != found
        )
      )
    } else if (e.target.name == 'delete-all') {
      setServants(servants.filter(value => value != value))
    } else {
      setServants(
        servants.map((value) => {
          if (value != undefined) {
            if ((y.id == value.id) || (z.id == value.id)) {
              found = true;
              if (e.target.name == 'edit-name-by-id') {
                return { ...servants, id: value.id, name: y.name, star: value.star }
              } else if (e.target.name == 'upgrade-star') {
                return { ...servants, id: value.id, name: value.name, star: value.star + 1 }
              } else if (e.target.name == 'downgrade-star') {
                return { ...servants, id: value.id, name: value.name, star: value.star - 1 }
              } else if (e.target.name == 'delete-by-id') {
                
                found = true;
                setServants(
                  servants.filter(t =>{t ==undefined|| t.id != z.id})
                )
              }
            } else {
              return value;
            }
          }

        })
      )
      found ? '' : alert('Id Tidak Ditemukan')
      found =false
    }
    setAddBuffer({ id: '', name: '', star: '' })
    setEditBuffer({ id: '', name: '', star: '' })
    setDeleteBuffer({ id: '', name: '', star: '' })
    console.log(servants)

  }



  return (
    <>
      <div>

        <>
          <div style={{ display: 'flex', justifyContent: 'space-around', padding: 10 }}>
            {
              servants.filter(value => value != undefined).
                map((value, index) => {
                  return <Servant key={index} id={value.id} name={value.name} star={value.star} />
                })
            }
          </div>
        </>
        <div style={{ display: 'flex', justifyContent: 'space-around', margin: '10px', padding: '20px' }}>
          {
            showAddTextField()
          }
          {
            showEditTextField()
          }{
            showDeleteTextField()
          }
        </div>
      </div>

    </>
  )
}

export default App
