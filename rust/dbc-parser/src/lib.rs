use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

#[wasm_bindgen]
pub struct DbcFile {
    messages: Vec<Message>,
}

#[derive(Serialize, Deserialize)]
struct Message {
    id: u32,
    name: String,
    signals: Vec<Signal>,
}

#[derive(Serialize, Deserialize)]
struct Signal {
    name: String,
    start_bit: u8,
    length: u8,
    factor: f64,
    offset: f64,
}

#[wasm_bindgen]
impl DbcFile {
    #[wasm_bindgen(constructor)]
    pub fn new() -> Self {
        DbcFile {
            messages: Vec::new(),
        }
    }

    #[wasm_bindgen]
    pub fn parse_dbc(&mut self, content: &str) -> Result<(), JsValue> {
        // TODO: Implement DBC parsing logic
        Ok(())
    }

    #[wasm_bindgen]
    pub fn get_messages(&self) -> Result<JsValue, JsValue> {
        serde_wasm_bindgen::to_value(&self.messages).map_err(|e| JsValue::from_str(&e.to_string()))
    }
} 