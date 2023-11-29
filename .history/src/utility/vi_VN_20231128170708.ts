<script>
// vi_VN.js
import viVN from 'ant-design-vue/es/locale/vi_VN';

const DatePickerLocale = {
  ...viVN,
  DatePicker: {
    ...viVN.DatePicker,
    lang: {
      ...viVN.DatePicker.lang,
      placeholder: 'Chọn ngày',
      rangePlaceholder: ['Ngày bắt đầu', 'Ngày kết thúc'],
      today: 'Hôm nay',
      now: 'Bây giờ',
      backToToday: 'Quay lại hôm nay',
      ok: 'Đồng ý',
      clear: 'Xóa',
      month: 'Tháng',
      year: 'Năm',
      timeSelect: 'Chọn thời gian',
      dateSelect: 'Chọn ngày',
      monthSelect: 'Chọn tháng',
      yearSelect: 'Chọn năm',
      decadeSelect: 'Chọn thập kỷ',
      yearFormat: 'YYYY',
      dateFormat: 'DD/MM/YYYY',
      dayFormat: 'DD',
      dateTimeFormat: 'DD/MM/YYYY HH:mm:ss',
      monthFormat: 'MM/YYYY',
      monthBeforeYear: true,
      previousMonth: 'Tháng trước (PageUp)',
      nextMonth: 'Tháng sau (PageDown)',
      previousYear: 'Năm trước (Control + left)',
      nextYear: 'Năm sau (Control + right)',
      previousDecade: 'Thập kỷ trước',
      nextDecade: 'Thập kỷ sau',
      previousCentury: 'Thế kỷ trước',
      nextCentury: 'Thế kỷ sau',
    },
    timePickerLocale: {
      ...viVN.DatePicker.timePickerLocale,
    },
  },
};

export default DatePickerLocale;

</script>