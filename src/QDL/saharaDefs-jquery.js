// Global Sahara protocol definitions
window.SaharaDefs = {
    // Commands
    SAHARA_HELLO_REQ: 0x1,
    SAHARA_HELLO_RSP: 0x2,
    SAHARA_READ_DATA: 0x3,
    SAHARA_END_TRANSFER: 0x4,
    SAHARA_DONE: 0x5,
    SAHARA_DONE_RSP: 0x6,
    SAHARA_RESET: 0x7,
    SAHARA_RESET_RSP: 0x8,
    SAHARA_MEMORY_DEBUG: 0x9,
    SAHARA_MEMORY_READ: 0xA,
    SAHARA_CMD_READY: 0xB,
    SAHARA_SWITCH_MODE: 0xC,
    SAHARA_EXECUTE_REQ: 0xD,
    SAHARA_EXECUTE_RSP: 0xE,
    SAHARA_EXECUTE_DATA: 0xF,
    SAHARA_64BIT_MEMORY_DEBUG: 0x10,
    SAHARA_64BIT_MEMORY_READ: 0x11,
    SAHARA_64BIT_MEMORY_READ_DATA: 0x12,

    // Modes
    SAHARA_MODE_IMAGE_TX_PENDING: 0x0,
    SAHARA_MODE_IMAGE_TX_COMPLETE: 0x1,
    SAHARA_MODE_MEMORY_DEBUG: 0x2,
    SAHARA_MODE_COMMAND: 0x3,

    // Status
    SAHARA_STATUS_SUCCESS: 0x00,
    SAHARA_NAK_INVALID_CMD: 0x01,
    SAHARA_NAK_PROTOCOL_MISMATCH: 0x02,
    SAHARA_NAK_INVALID_TARGET_PROTOCOL: 0x03,
    SAHARA_NAK_INVALID_HOST_PROTOCOL: 0x04,
    SAHARA_NAK_INVALID_PACKET_SIZE: 0x05,
    SAHARA_NAK_UNEXPECTED_IMAGE_ID: 0x06,
    SAHARA_NAK_INVALID_HEADER_SIZE: 0x07,
    SAHARA_NAK_INVALID_DATA_SIZE: 0x08,
    SAHARA_NAK_INVALID_IMAGE_TYPE: 0x09,
    SAHARA_NAK_INVALID_TX_LENGTH: 0x0A,
    SAHARA_NAK_INVALID_RX_LENGTH: 0x0B,
    SAHARA_NAK_GENERAL_ERROR: 0x0C,
    SAHARA_NAK_READ_DATA_ERROR: 0x0D,
    SAHARA_NAK_UNSUPPORTED_NUM_PHDRS: 0x0E,
    SAHARA_NAK_INVALID_PDHR_SIZE: 0x0F,
    SAHARA_NAK_MULTIPLE_SHARED_SEG: 0x10,
    SAHARA_NAK_UNINIT_PHDR_LOC: 0x11,
    SAHARA_NAK_INVALID_DEST_ADDR: 0x12,
    SAHARA_NAK_INVALID_IMAGE_HDR_SIZE: 0x13,
    SAHARA_NAK_INVALID_IMAGE_HDR_DATA: 0x14,
    SAHARA_NAK_INVALID_IMG_SIZE: 0x15,
    SAHARA_NAK_FIRMWARE_ERROR: 0x16,
    SAHARA_NAK_REMOTE_PROC_ERROR: 0x17,
    SAHARA_NAK_ERROR_PACKET_TIMEOUT: 0x18,
    SAHARA_NAK_ERROR_PACKET_LENGTH: 0x19,
    SAHARA_NAK_ERROR_PACKET_DATA: 0x1A,
    SAHARA_NAK_ERROR_UNKNOWN: 0x1B,
    SAHARA_NAK_ERROR_AUTH_FAIL: 0x1C,
    SAHARA_NAK_ERROR_TRANSMISSION: 0x1D
};
