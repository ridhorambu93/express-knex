const express = require('express')
const app = express()
const port = 3000
const bodyParse = require('body-parser');
const bodyParser = require('body-parser');

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        password: '',
        database: 'db-ricebowl'
    }
});


app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(bodyParser.json({
    limit: "8mb"
}))

    app.get('/anonim', async (req, res) => {
        try {
            const getAlldata =  await knex('anonim');
            res.json(getAlldata)
        } catch(e) {
            console.log(e)
        }
    })

    app.post('/anonim/create', async (req, res) => {
        // try {

            // let nama_produk_satu = req.body.nama_produk_satu
            // let nama_produk_dua = req.body.nama_produk_dua
            // let nama_produk_tiga = req.body.nama_produk_tiga
            // let jenis_produk_satu = req.body.jenis_produk_satu
            // let jenis_produk_dua = req.body.jenis_produk_dua
            // let jenis_produk_tiga = req.body.jenis_produk_tiga
            // let detail_satu = req.body.detail_satu
            // let detail_dua = req.body.detail_dua
            // let detail_tiga = req.body.detail_tiga

            const {
                nama_produk_satu,
                nama_produk_dua,
                nama_produk_tiga,
                jenis_produk_satu,
                jenis_produk_dua,
                jenis_produk_tiga,
                detail_satu,
                detail_dua,
                detail_tiga,
                pembuat_menu,
                store_satu,
                store_dua,
                store_tiga,
                bahan_menu_satu,
                bahan_menu_dua,
                bahan_menu_tiga,
                alamat_store_satu,
                alamat_store_dua,
                alamat_store_tiga,
                kota,
                kecamatan,
                is_active,
                nama_store_satu,
                nama_store_dua,
                nama_store_tiga,
                penanggung_jawab_satu,
                penanggung_jawab_dua,
                penanggung_jawab_tiga
            } = req.body

            const data = {
                nama_produk_satu: nama_produk_satu,
                nama_produk_dua: nama_produk_dua,
                nama_produk_tiga: nama_produk_tiga,
                jenis_produk_satu: jenis_produk_satu,
                jenis_produk_dua: jenis_produk_dua,
                jenis_produk_tiga: jenis_produk_tiga,
                detail_satu: detail_satu,
                detail_dua: detail_dua,
                detail_tiga: detail_tiga,
                pembuat_menu: pembuat_menu,
                store_satu: store_satu,
                store_dua: store_dua,
                store_tiga: store_tiga,
                bahan_menu_satu: bahan_menu_satu,
                bahan_menu_dua: bahan_menu_dua,
                bahan_menu_tiga: bahan_menu_tiga,
                alamat_store_satu: alamat_store_satu,
                alamat_store_dua: alamat_store_dua,
                alamat_store_tiga: alamat_store_tiga,
                kota: kota,
                kecamatan: kecamatan,
                is_active: is_active ? 1 : 0,
                nama_store_satu: nama_store_satu,
                nama_store_dua: nama_store_dua,
                nama_store_tiga: nama_store_tiga,
                penanggung_jawab_satu: penanggung_jawab_satu,
                penanggung_jawab_dua: penanggung_jawab_dua,
                penanggung_jawab_tiga: penanggung_jawab_tiga,
            }

            const addData = await knex('anonim').insert(data)

            // const addData = await knex('anonim').insert({
            //     "nama_produk_satu": nama_produk_satu,
            //     "nama_produk_dua": nama_produk_dua,
            //     "nama_produk_tiga": nama_produk_tiga,
            //     "jenis_produk_satu": jenis_produk_satu,
            //     "jenis_produk_dua": jenis_produk_dua,
            //     "jenis_produk_tiga": jenis_produk_tiga,
            //     "detail_satu": detail_satu,
            //     "detail_satu": detail_satu,
            //     "detail_satu": detail_satu,
            //     "detail_dua": detail_dua,
            //     "detail_tiga": detail_tiga
            // })
            if (addData) {
                const result = {
                    data: addData[0],
                    code: 201,
                    status: 'success',
                    message: 'Berhasil tambah data'
                }
                res.status(result.code).json(result)
            }
        // } catch (e) {
        //     console.log(e);
        // }
    })

    app.get('/anonim/:id', async (req, res) => {
        const {id} = req.params
        const getById = await knex('anonim').where({id : id})
        if (getById) {
            const result = {
                data: getById,
                status: "success",
                code: 200
            }
            res.status(result.code).json(result)
        }
    })

    app.put('/anonim/:id/update', async (req, res) => {
        const {id} = req.params
        const {
            nama_produk_satu: nama_produk_satu,
            nama_produk_dua: nama_produk_dua,
            nama_produk_tiga: nama_produk_tiga,
            jenis_produk_satu: jenis_produk_satu,
            jenis_produk_dua: jenis_produk_dua,
            jenis_produk_tiga: jenis_produk_tiga,
            detail_satu: detail_satu,
            detail_dua: detail_dua,
            detail_tiga: detail_tiga,
            pembuat_menu: pembuat_menu,
            store_satu: store_satu,
            store_dua: store_dua,
            store_tiga: store_tiga,
            bahan_menu_satu: bahan_menu_satu,
            bahan_menu_dua: bahan_menu_dua,
            bahan_menu_tiga: bahan_menu_tiga,
            alamat_store_satu: alamat_store_satu,
            alamat_store_dua: alamat_store_dua,
            alamat_store_tiga: alamat_store_tiga,
            kota: kota,
            kecamatan: kecamatan,
            is_active: is_active,
            nama_store_satu: nama_store_satu,
            nama_store_dua: nama_store_dua,
            nama_store_tiga: nama_store_tiga,
            penanggung_jawab_satu: penanggung_jawab_satu,
            penanggung_jawab_dua: penanggung_jawab_dua,
            penanggung_jawab_tiga: penanggung_jawab_tiga,
        } = req.body

        const data = {
                nama_produk_satu: nama_produk_satu,
                nama_produk_dua: nama_produk_dua,
                nama_produk_tiga: nama_produk_tiga,
                jenis_produk_satu: jenis_produk_satu,
                jenis_produk_dua: jenis_produk_dua,
                jenis_produk_tiga: jenis_produk_tiga,
                detail_satu: detail_satu,
                detail_dua: detail_dua,
                detail_tiga: detail_tiga,
                pembuat_menu: pembuat_menu,
                store_satu: store_satu,
                store_dua: store_dua,
                store_tiga: store_tiga,
                bahan_menu_satu: bahan_menu_satu,
                bahan_menu_dua: bahan_menu_dua,
                bahan_menu_tiga: bahan_menu_tiga,
                alamat_store_satu: alamat_store_satu,
                alamat_store_dua: alamat_store_dua,
                alamat_store_tiga: alamat_store_tiga,
                kota: kota,
                kecamatan: kecamatan,
                is_active: is_active,
                nama_store_satu: nama_store_satu,
                nama_store_dua: nama_store_dua,
                nama_store_tiga: nama_store_tiga,
                penanggung_jawab_satu: penanggung_jawab_satu,
                penanggung_jawab_dua: penanggung_jawab_dua,
                penanggung_jawab_tiga: penanggung_jawab_tiga,
        }

        const updateData = await knex('anonim').where({id : id}).update(data)
        if (updateData) {
            return {
                code: 200,
                status: 'success',
                message: 'Data berhasil di ubah'
            }
        } else {
            return {
                code: 400,
                status: 'error',
                message: 'Gagal mengubah data'
            }
        }
    })

    app.delete('/anonim/:id/delete', async (req, res) => {
        const {id} = req.params
        const deleteData = await knex('anonim').where({id : id}).del()
        if (deleteData) {
            const result = {
                data: deleteData[0],
                code: 200,
                message: "Data berhasil di hapus"
            }
            res.status(result.code).json(result)
        } else {
            return {
                code: 400,
                message: "Gagal menghapus data"
            }
        }
    })

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))