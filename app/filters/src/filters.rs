#[macro_use]
extern crate stdweb;

use stdweb::web::{
    TypedArray,
};

#[no_mangle]
pub fn add(a: i32, b: i32) -> i32 {
  return a + b
}

#[no_mangle]
pub fn identity(data: TypedArray::<u8>) -> TypedArray::<u8> {
  return data;
}
