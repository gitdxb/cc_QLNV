/**
 * Chứa các hàm xử lý tương tác UI
 */
//GLOBAL
var dsnv = new DanhSachNhanVien();
// Hàm rút gọn cú phát getElementByID
function getELE(id) {
  return document.getElementById(id);
}
function setLocalStorage() {
  localStorage.setItem("DSNV", JSON.stringify(dsnv.mangNV));
}

function getLocalStorage() {
  if (localStorage.getItem("DSNV") != undefined) {
    dsnv.mangNV = JSON.parse(localStorage.getItem("DSNV"));
  }

  hienThiDS(dsnv.mangNV);
}
getLocalStorage();

// Thêm nhân viên mới
function themNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var tenNV = getELE("name").value;
  var email = getELE("email").value;
  var password = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  // tạo thể hiện của NV
  var nv = new NhanVien(
    taiKhoan,
    tenNV,
    email,
    password,
    ngayLam,
    Number(luongCB),
    chucVu,
    Number(gioLam));

    nv.tongLuong();

  // Thêm nv vào mangNV
  dsnv.themNV(nv);

  // Gọi hàm hiển thị
  hienThiDS(dsnv.mangNV);

  setLocalStorage();
}

// Hiển thị DSNV
function hienThiDS(mangNV) {
  var content = ""; // Giá trị ban đầu
  mangNV.map(function (nv) {
    var trELE = `
            <tr>
                <td>${nv.taiKhoan}</td>
                <td>${nv.tenNV}</td>
                <td>${nv.email}</td>
                <td>${nv.ngayLam}</td>
                <td>${nv.chucVu}</td>
                <td>${nv.luongCB}</td>
            </tr>
        `;
    content += trELE;
  });
  getELE("tableDanhSach").innerHTML = content;
}

function capNhatNhanVien() {
  var taiKhoan = getELE("tknv").value;
  var tenNV = getELE("name").value;
  var email = getELE("email").value;
  var password = getELE("password").value;
  var ngayLam = getELE("datepicker").value;
  var luongCB = getELE("luongCB").value;
  var chucVu = getELE("chucvu").value;
  var gioLam = getELE("gioLam").value;

  // tạo thể hiện của NV
  var nv = new NhanVien(
    taiKhoan,
    tenNV,
    email,
    password,
    ngayLam,
    Number(luongCB),
    chucVu,
    Number(gioLam)
  );

  nv.tongLuong();
  console.log("nhân viên: " + nv);

  dsnv.capNhatNV(nv);
  hienThiDS(dsnv.mangNV);
  setLocalStorage();
}
