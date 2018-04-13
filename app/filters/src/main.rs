#[macro_use]
extern crate stdweb;

fn main() {
    stdweb::initialize();
    js!(
        alert( "Hello world!" );
    );
}

#[js_export]
fn hash( string: String ) -> String {
    let mut hasher = Sha1::new();
    hasher.update( string.as_bytes() );
    hasher.digest().to_string()
}

