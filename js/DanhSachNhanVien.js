/**
 * + Lưu trữ nhiều đối tượng NV
 * + Thêm NV (thêm phần tử mới cho mảng)
 * + Xóa, sửa
 */
function DanhSachNhanVien() {
  // thuộc tính
  this.mangNV = [];

  //phương thức
  // truyền tham số là đối tượng NV
  this.themNV = function (nv) {
    this.mangNV.push(nv);
  };
  this.timViTri = function (ma) {
    // giả sử viTri chưa tìm thấy nên = -1
    var viTri = -1;
    // Duyệt mảng và so sánh mã để tìm sinh viên trong mảng
    this.mangNV.map(function (tknv, index) {
      if (nv.taiKhoan === tknv) {
        // tìm thấy
        viTri = index;
      }
    });

    // trả kết quả vị trí tìm thấy ra khỏi hàm để sử dụng ở các hàm khác
    return viTri;
  };
  this.capNhatNV = function (nv) {
    var viTri = this.timViTri(nv.tknv);
    if (viTri > -1) {
      // tìm thấy
      dsnv.mangNV[viTri] = nv;
    }
  };
}
