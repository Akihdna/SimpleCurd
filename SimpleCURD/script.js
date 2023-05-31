let id = null;
const Variable = id => {
    eval(`const ${id} = document.querySelector("#${id}")`)
}
const input = (id, type = "text", label = "", placeholder = "") => {
    return `
    <label>${label}</label><br>
    <input type = "${type}" id = "${id}" placeholder = "${placeholder}"><br>
    `
    Variable(id)
}
const button = (id, label) => {
    return `<button id = "${id}"> ${label}</button>`
    Variable(id)
}

const div = id => {
    return `<div id = "${id}"></div>`
    Variable(id)
}

const editData = index => {
    namaBarang.value = data[index].nama
    hargaBarang.value = data[index].harga
    id = index
}

const deleteData = index => {
    data.splice(index, 1)
    loadData(data, dataList)
}

const loadData = (data, element) => {
    element.innerHTML = ''
    let i = 0
    data.forEach(item => {
        element.innerHTML += `
        <p>
            Nama Barang : ${item.nama}, <br>
            Harga Barang : ${item.harga} <button onclick = "editData(${i})">Edit</button>
            <button onclick = "deleteData(${i})">Delete</button>
        </p>
        `
        i++
    });
}

const clear = () => {
    namaBarang.value = null
    hargaBarang.value = null
    id = null
}

let data = [
    {
        'nama': 'Baju',
        'harga': 30000
    },
    {
        'nama': 'Celana',
        'harga': 100000
    }
]

document.body.innerHTML += input('namaBarang', 'text', 'Nama Barang', 'Masukkan Nama Barang');
document.body.innerHTML += input('hargaBarang', 'text', 'Harga Barang', 'Masukkan Harga Barang');
document.body.innerHTML += button('btnSimpan', 'Save')
document.body.innerHTML += button('btnClear', 'Delete')
document.body.innerHTML += div('dataList')
loadData(data, dataList)
btnClear.addEventListener('click', () => {
    clear()
})
btnSimpan.addEventListener('click', () => {
    if (id == null) {
        data.push({
            'nama': namaBarang.value,
            'harga': hargaBarang.value
        })
        clear()
    } else {
        data[id].nama = namaBarang.value
        data[id].harga = hargaBarang.value
    }
    loadData(data, dataList)
})