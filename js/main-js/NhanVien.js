/**
 * Khai báo lớp đối tượng Nhân Viên
 */
function NhanVien(taiKhoan, tenNV, email, password, ngayLam, luongCB, chucVu, gioLam) {
    // thuộc tính
    this.taiKhoan = taiKhoan;
    this.tenNV = tenNV;
    this.email = email;
    this.password = password;
    this.ngayLam = ngayLam;
    this.luongCB = luongCB;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
    this.luong = 0;
    this.xeploai = '';

    
    // phương thức
    this.tongLuong = function(indexOption, luongCB) {
        var indexOption = document.getElementById('chucvu').selectedIndex;
        var luongCB = document.getElementById('luongCB').value;
        var luong = 0;
        if (indexOption == 1) {
            // Sep
            luong = luongCB * 3;
        } else if (indexOption == 2) {
            // Truong phong
            luong = luongCB * 2;
        } else if (indexOption == 3) {
            // Nhan vien
            luong = luongCB;
        }
        console.log('luong', luong);
        return luong;
    }

    this.xeploaiNV = function(){}
    
}