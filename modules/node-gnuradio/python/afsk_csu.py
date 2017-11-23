#!/usr/bin/env python2
# -*- coding: utf-8 -*-
##################################################
# GNU Radio Python Flow Graph
# Title: Afsk Csu
# Generated: Wed Aug 30 17:20:02 2017
##################################################

from gnuradio import analog
from gnuradio import blocks
from gnuradio import digital
from gnuradio import eng_notation
from gnuradio import filter
from gnuradio import gr
from gnuradio.eng_option import eng_option
from gnuradio.filter import firdes
from optparse import OptionParser
from scipy import signal
import math


class afsk_csu(gr.top_block):

    def __init__(self):
        gr.top_block.__init__(self, "Afsk Csu")

        ##################################################
        # Variables
        ##################################################
        self.samp_rate = samp_rate = 44100
        self.bps = bps = 1200
        self.window_len = window_len = (samp_rate/bps)*2
        self.dec = dec = 4
        self.window_sync = window_sync = signal.windows.hann(116)
        self.window = window = signal.windows.cosine(window_len)
        self.dec_samp_rate = dec_samp_rate = samp_rate/dec
        self.bpf_width = bpf_width = bps+200
        self.bpf_trans = bpf_trans = 200

        ##################################################
        # Blocks
        ##################################################
        self.freq_xlating_fir_filter_xxx_0_0 = filter.freq_xlating_fir_filter_fcf(dec, (window), (2200+1200)/2, samp_rate)
        self.digital_diff_decoder_bb_0 = digital.diff_decoder_bb(2)
        self.digital_clock_recovery_mm_xx_0_0 = digital.clock_recovery_mm_ff(9.1875, 0.28, 0, 0.024, 0.01)
        self.digital_binary_slicer_fb_0_0 = digital.binary_slicer_fb()
        self.blocks_wavfile_source_0 = blocks.wavfile_source('/tmp/gs-sample.wav', False)
        self.blocks_multiply_const_vxx_0 = blocks.multiply_const_vff((1, ))
        self.blocks_file_sink_1_0_1_0 = blocks.file_sink(gr.sizeof_char*1, '/tmp/gs-sample.binary', False)
        self.blocks_file_sink_1_0_1_0.set_unbuffered(True)
        self.band_pass_filter_0 = filter.fir_filter_fff(1, firdes.band_pass(
        	1, samp_rate, 1700-bpf_width, 1700+bpf_width, bpf_trans, firdes.WIN_HAMMING, 6.76))
        self.analog_quadrature_demod_cf_0 = analog.quadrature_demod_cf((dec_samp_rate/bps)/(math.pi*0.5))

        ##################################################
        # Connections
        ##################################################
        self.connect((self.analog_quadrature_demod_cf_0, 0), (self.blocks_multiply_const_vxx_0, 0))
        self.connect((self.band_pass_filter_0, 0), (self.freq_xlating_fir_filter_xxx_0_0, 0))
        self.connect((self.blocks_multiply_const_vxx_0, 0), (self.digital_clock_recovery_mm_xx_0_0, 0))
        self.connect((self.blocks_wavfile_source_0, 0), (self.band_pass_filter_0, 0))
        self.connect((self.digital_binary_slicer_fb_0_0, 0), (self.digital_diff_decoder_bb_0, 0))
        self.connect((self.digital_clock_recovery_mm_xx_0_0, 0), (self.digital_binary_slicer_fb_0_0, 0))
        self.connect((self.digital_diff_decoder_bb_0, 0), (self.blocks_file_sink_1_0_1_0, 0))
        self.connect((self.freq_xlating_fir_filter_xxx_0_0, 0), (self.analog_quadrature_demod_cf_0, 0))

    def get_samp_rate(self):
        return self.samp_rate

    def set_samp_rate(self, samp_rate):
        self.samp_rate = samp_rate
        self.set_dec_samp_rate(self.samp_rate/self.dec)
        self.set_window_len((self.samp_rate/self.bps)*2)
        self.band_pass_filter_0.set_taps(firdes.band_pass(1, self.samp_rate, 1700-self.bpf_width, 1700+self.bpf_width, self.bpf_trans, firdes.WIN_HAMMING, 6.76))

    def get_bps(self):
        return self.bps

    def set_bps(self, bps):
        self.bps = bps
        self.set_bpf_width(self.bps+200)
        self.set_window_len((self.samp_rate/self.bps)*2)
        self.analog_quadrature_demod_cf_0.set_gain((self.dec_samp_rate/self.bps)/(math.pi*0.5))

    def get_window_len(self):
        return self.window_len

    def set_window_len(self, window_len):
        self.window_len = window_len
        self.set_window(signal.windows.cosine(self.window_len))

    def get_dec(self):
        return self.dec

    def set_dec(self, dec):
        self.dec = dec
        self.set_dec_samp_rate(self.samp_rate/self.dec)

    def get_window_sync(self):
        return self.window_sync

    def set_window_sync(self, window_sync):
        self.window_sync = window_sync

    def get_window(self):
        return self.window

    def set_window(self, window):
        self.window = window
        self.freq_xlating_fir_filter_xxx_0_0.set_taps((self.window))

    def get_dec_samp_rate(self):
        return self.dec_samp_rate

    def set_dec_samp_rate(self, dec_samp_rate):
        self.dec_samp_rate = dec_samp_rate
        self.analog_quadrature_demod_cf_0.set_gain((self.dec_samp_rate/self.bps)/(math.pi*0.5))

    def get_bpf_width(self):
        return self.bpf_width

    def set_bpf_width(self, bpf_width):
        self.bpf_width = bpf_width
        self.band_pass_filter_0.set_taps(firdes.band_pass(1, self.samp_rate, 1700-self.bpf_width, 1700+self.bpf_width, self.bpf_trans, firdes.WIN_HAMMING, 6.76))

    def get_bpf_trans(self):
        return self.bpf_trans

    def set_bpf_trans(self, bpf_trans):
        self.bpf_trans = bpf_trans
        self.band_pass_filter_0.set_taps(firdes.band_pass(1, self.samp_rate, 1700-self.bpf_width, 1700+self.bpf_width, self.bpf_trans, firdes.WIN_HAMMING, 6.76))


def main(top_block_cls=afsk_csu, options=None):

    tb = top_block_cls()
    tb.start()
    tb.wait()


if __name__ == '__main__':
    main()
