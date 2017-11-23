import scipy
from bitarray import bitarray
# from PyCRC.CRCCCITT import CRCCCITT as CRC

FILE_PATH = "/tmp/threshold_out"


def print_hex_array(array, delimiter=''):
    outstring = ''
    for item in array:
        hchar = "{:02x}".format(item)
        outstring += delimiter + hchar

    print(outstring)


def hex_to_char(hex_arr):
    out = ''
    for item in hex_arr:
        out += ''.join(chr(int(item, 16)))
    return out


def get_AX25_frame(bin_arr):
    bin_string = bin_arr.to01()
    data = bin_string.split('01111110' * 50)
    while '' in data:
        data.remove('')

    # TODO: IMPROVE PARSER
    # print(data)
    data = data[1]
    return bitarray(data)


def get_AX25_header(hex_arr):
    header_hex_arr = hex_arr[:16]
    return header_hex_arr


def get_AX25_address(ax25_hex_arr):
    for item in ax25_hex_arr:
        d = int(item)
        d = d / 2


def get_AX25_payload(hex_arr):
    payload_hex_arr = hex_arr[16:256]
    return payload_hex_arr


def get_FCS_bits(bin_string):
    return bin_string[-16:]


def remove_stuffing(ax25_data):
    # Remove BIT Stuffing
    idx = ax25_data.search(bitarray('11111'))

    del_count = 0
    for i in idx:
        i += 5
        i -= del_count
        ax25_data.pop(i)
        del_count += 1

    return ax25_data


def append_zeros(ax25_data, n):
    return (bitarray('0') * n) + ax25_data[:-n]


# def fcs_validate(frame_str, fcs_bit_str):
#     bit_arr = bitarray(frame_str[:-16])
#     hex_arr = bit_arr.tobytes()
#     print_hex_array(hex_arr)

#     return CRC().calculate(hex_arr)

int_arr = scipy.fromfile(open(FILE_PATH), dtype=scipy.uint8)

bit_str = ''.join(str(x) for x in int_arr)

bin_complete = bitarray(bit_str)
bin_complete.invert()

AX25_bin_data = get_AX25_frame(bin_complete)

fcs_bits = get_FCS_bits(AX25_bin_data)

# AX25_bin_data = bitarray(AX25_bin_data.to01(), endian="little")
AX25_bin_data = bitarray(AX25_bin_data.to01(), endian="big")

AX25_bin_data_unstuff = remove_stuffing(AX25_bin_data.copy())

# AX25_bin_data_unstuff = append_zeros(AX25_bin_data_unstuff.copy(), 8)

AX25_bin_data_unstuff.bytereverse()

frame_hex = AX25_bin_data_unstuff.tobytes()

# print(fcs_validate(AX25_bin_data_unstuff, fcs_bits))

print('\nAX25 Complete Frame Data: \r')
print_hex_array(frame_hex)

header_hex = get_AX25_header(frame_hex)
print('\nAX25 Header Data: \r')
print_hex_array(header_hex)

payload_hex = get_AX25_payload(frame_hex)
print('\nPayload Data: \r')
print_hex_array(payload_hex)

# fcs_validate(AX25_bin_data_unstuff)


# hex_complete = AX25_bin_data_unstuff.tobytes()
# print_hex_array(hex_complete)

# print(AX25_bin_data_unstuff)
# print(AX25_bin_data_shifted)
