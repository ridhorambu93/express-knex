const db = require('../config/database');
const table = 'anonim'

class RiceBowl {
    static async getAll(req, res, next)
    {
        const getAllData = await db(table)
        if (getAllData) {
            const result = {
                data: getAllData,
                status: 'success',
                code: 200
            }
            res.status(result.code).json(result)
        } else {
            const result = {
                status: 'error',
                code: 400
            }
            res.status(result.code).json(result)
        }
    }

    static async getById(req, res, next)
    {
        const {id} = req.params
        const getDataById = await db(table).where({id : id})
        if (getDataById.length <= 0) {
            return {
                status: 'error',
                message: 'Id tidak ada',
                code: 400
            }
        } else {
            return {
                status: 'success',
                code: 200,
                data: getDataById
            }
        }
    }

    static async create(req, res, next) {
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
            penanggung_jawab_tiga,
          } = req.body;
        
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
        };

        const addData = await db(table).insert(data);
        if (addData) {
            const result = {
                code: 201,
                status: 'success',
                message: 'Berhasil menambah data',
                id: addData[0]
            }
            res.status(result.code).json(result)
        } else {
            const result = {
                code: 400,
                status: error.sqlMessage
            }
            res.status(result.code).json(result)
        }
    }

    static async updateData(req, res) {
        const { id } = req.params;
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
        } = req.body;

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
        };

        try {
            const updateData = await db(table).where({ id: id }).update(data);
            if (updateData > 0) {
                return {
                    data: updateData,
                    code: 200,
                    message: "Berhasil mengubah data",
                    status: "success",
                }
            } else {
                return {
                    message: "Id tidak ditemukan",
                    code: 400,
                    status: "error",
                }
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async deleteData(req, res) {
        const { id } = req.params;
        try {
          const deleteData = await db(table).where({ id: id }).del();
          if (deleteData > 0) {
            const result = {
              data: deleteData,
              message: "Data berhasil dihapus",
              code: 200,
              status: "success",
            }
            res.status(result.code).json(result);
          } else {
            const result = {
              message: "Gagal menghapus data, id tidak ada",
              code: 400,
              status: 'error',
            }
            res.status(result.code).json(result);
          }
        } catch (error) {
          console.log(error);
        }
    }
}

module.exports = RiceBowl