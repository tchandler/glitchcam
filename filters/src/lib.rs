#![feature(proc_macro)]

#[macro_use]
extern crate stdweb;

use stdweb::js_export;
use stdweb::web::TypedArray;

#[js_export]
fn testId(num: i32) -> i32 {
  num
}

// #[js_export]
// fn identity( data: TypedArray<u8>) -> TypedArray<u8> {
//     data
// }
