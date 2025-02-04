use wasm_bindgen::prelude::*;
use serde::{Serialize, Deserialize};

#[wasm_bindgen]
pub struct ProtocolDecoder {
    protocol_type: ProtocolType,
}

#[wasm_bindgen]
#[derive(Serialize, Deserialize, Clone)]
pub enum ProtocolType {
    IsoTp,
    Obd2,
    Uds,
    J1939,
}

#[derive(Serialize, Deserialize)]
pub struct DecodedFrame {
    protocol: ProtocolType,
    data: Vec<u8>,
    timestamp: f64,
}

#[wasm_bindgen]
impl ProtocolDecoder {
    #[wasm_bindgen(constructor)]
    pub fn new(protocol: ProtocolType) -> Self {
        ProtocolDecoder {
            protocol_type: protocol,
        }
    }

    #[wasm_bindgen]
    pub fn decode_frame(&self, raw_data: &[u8]) -> Result<JsValue, JsValue> {
        let decoded = DecodedFrame {
            protocol: self.protocol_type.clone(),
            data: raw_data.to_vec(),
            timestamp: js_sys::Date::now(),
        };
        
        // TODO: Implement actual protocol decoding logic
        serde_wasm_bindgen::to_value(&decoded).map_err(|e| JsValue::from_str(&e.to_string()))
    }
} 