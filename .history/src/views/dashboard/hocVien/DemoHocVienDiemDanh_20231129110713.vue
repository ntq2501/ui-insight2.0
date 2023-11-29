<script setup lang="ts">
    import { Main, TableWrapper } from '../../styled';
    import { DataTableStyleWrap } from '../../../components/table/Style';
    import { defineAsyncComponent, reactive, ref } from 'vue';
    //import { TableWrapper } from '@/views/wizard/styled';
    //import { Main, TableWrapper } from '../../styled';

    const dateFormat = ref("DD/MM/YYYY");
    let valueSelected = ref('');
    const currentPage = ref<number>(1);
    const dataSource = reactive([
          {
            key: 1,
            date: '25/11/2023',
            time: '10:20',
            value: 1,
            status: 'Đi muộn',
          },
          {
            key: 2,
            date: '28/11/2023',
            time: '9:30',
            status: 'Đúng giờ',
          },
          {
            key: 3,
            date: '29/11/2023',
            time: '13:30',
            status: 'Đúng giờ',
          },
          {
            key: 4,
            date: '15/11/2023',
            time: '20:20',
            status: 'Xin nghỉ',
          },
        ])

    const columns = reactive([
          {
            title: 'Ngày',
            dataIndex: 'date',
            key: 'date',
          },
          {
            title: 'Ca - Giờ',
            dataIndex: 'time',
            key: 'time',
          },
          {
            title: 'Trạng thái',
            dataIndex: 'status',
            key: 'status',
          },
        ])

    const optionSelectorStatuses = [
        {
            value: 1,
            text: "Đúng giờ"
        },
        {
            value: 2,
            text: "Muộn giờ"
        },
        {
            value: 3,
            text: "Xin nghỉ"
        }
    ]
    const customLocale = {
        emptyText: 'Không có dữ liệu',
    };

    function getStatusClass(status: string) {
      switch (status) {
        case 'Đi muộn':
          return 'status-badge late';
        case 'Đúng giờ':
          return 'status-badge on-time';
        case 'Xin nghỉ':
          return 'status-badge leave';
        default:
          return 'status-badge';
      }
    }
    const handleChange = (value: any) => {
    
    };

    const onChange = (date: any, dateString: any) => {
        
    };
</script>

<template>
    <div class="Attendance-history">
        <Main>
            <a-row>
                <a-col :xs="24">
                    <sdCards title="Lịch sử điểm danh">
                        <a-row>
                            <a-col class="py-10 pr-15 pr-sm-0" :xxl="6" :xl="6" :lg="6" :md="6" :sm="24" :xs="24">
                                <p class="card-title">Tình trạng</p>
                                <SelectWrapperStyle>
                                    <a-select v-model:value="valueSelected" ref="select" @change="handleChange">
                                      <a-select-option v-for="item in optionSelectorStatuses" :key="item.value" :value="item.value">{{ item.text }}</a-select-option>
                                    </a-select>
                                  </SelectWrapperStyle>
                                  
                            </a-col>
                            <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                                <a-row justify="space-between" class="datepicker-wapper" >
                                    <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="12" :xs="12" class="px-5 pl-sm-10">
                                        <p class="card-title">Từ ngày</p>
                                        <DatePickerWrapper>
                                            <a-date-picker :format="dateFormat" @change="onChange" class="padding-input-date" />
                                        </DatePickerWrapper>
                                    </a-col>
                                    <a-col :xxl="12" :xl="12" :lg="12" :md="12" :sm="12" :xs="12" class="px-5 pr-sm-10">
                                        <p class="card-title">Đến ngày</p>
                                        <DatePickerWrapper>
                                            <a-date-picker :format="dateFormat" @change="onChange" class="padding-input-date" />
                                        </DatePickerWrapper>
                                    </a-col>
                                </a-row>
                            </a-col>
                        </a-row>
                        
                        <DataTableStyleWrap >
                            <TableWrapper>
                                <a-table :dataSource="dataSource" :columns="columns" :pagination="false" :locale="customLocale">
                                    <template #bodyCell="{ column, record }">
                                        <template v-if="column.key === 'status'">
                                            <span :class="getStatusClass(record.status)">
                                            {{ record.status }}
                                            </span>
                                        </template>
                                    </template>
                                </a-table>
                            </TableWrapper>

                        </DataTableStyleWrap>
                        
                        <>
                            <a-pagination v-model:current="currentPage" :total="500" />

                            </
                        </div>
                    </sdCards>

                </a-col>
            </a-row>
        </Main>
    </div>
</template>


<style scoped>
.Attendance-history{
  font-family: Arial, Helvetica, sans-serif;
}
.Attendance-history .ant-card-head {
    border-bottom: 0px;
}
.Attendance-history .lmeiNC{
    padding-top: 20px;
}
.Attendance-history .ant-row {
    padding: 10px 0;
}

.Attendance-history .custom-card {
    margin-right: 20px;
}
:global(div.ant-card-body > div.jGPvQM > div > div > div > div > div > div > div > table > tbody > tr> td),
:global(div.ant-card-body > div.jGPvQM > div > div > div > div > div > div > div > table > thead > tr > th) {
    text-align: center;
}
:global(div.ant-card-body > div:nth-child(3)) {
    text-align: end;
}
.Attendance-history .card-title {
    margin-bottom: 5px;
}
.status-badge {
    display: inline-block;
    padding: 6px 16px;
    border-radius:50px;
    color: #FFF;
}
.status-badge.late{
    background-color: #FFC000;
}
.status-badge.on-time { 
    background-color: #3895FF;
}
.status-badge.leave {
    background-color: #FF4D4F;
}
.Attendance-history .padding-input-date {
    padding: 7px;
}
.datepicker-wapper {
    margin: 0 -10px;
}
.Attendance-history .lmeiNC .ant-picker {
    border-color: #E3E6EF !important;
    width: 100%;
    margin-right: 10px;
}

.Attendance-history .ant-picker {
    border-radius: 4px;
}

.Attendance-history .custom-card .ant-select {
    width: 180px;
}
.Attendance-history .custom-card .ant-picker {
    min-width: 180px;
    width: 100%;
}

.Attendance-history .table-attendance .dXRjFB .ant-card-body {
    padding: 0px !important;
}

.Attendance-history .table-attendance .dXRjFB .ant-card-head {
    display: none;
}

.Attendance-history .ant-table-container table>thead>tr:first-child th:first-child,
.Attendance-history .ant-table-container table>thead>tr:first-child th:last-child {
    border-top-left-radius: 4px;
}

.Attendance-history .table-attendance {
    margin-top: 20px;
}
.Attendance-history .ant-table-content{
    height: 300px;
    overflow: auto;
    scrollbar-width: thin;
}

.Attendance-history .ant-table-content .ant-table-thead {
    position: sticky;
    z-index: 1;
}
.Attendance-history .table-attendance thead th {
    position: sticky;
    top: 0;
    z-index: 1;
}
.ant-picker {
    min-width: unset !important;
}
.ant-select {
    width: 100%;
}
.py-10 {
    padding: 10px 0;
}
.pr-15 {
    padding-right: 15px;
}
.px-5 {
    padding: 0 5px;
}
@media screen and (max-width: 600px) {
    .pr-sm-0 {
        padding: 0;
    }
    .Attendance-history .jWOmVG h1 {
        font-size: 12px;
    }

    .Attendance-history .ant-table {
        font-size: 12px;
    }

    .Attendance-history .cYeWcq .ant-table {
        padding: 0px;
    }

    .Attendance-history .custom-card {
        margin-bottom: 10px;
    }

    .Attendance-history .card-title {
        margin-bottom: 0px;
    }
    .pl-sm-10 {
        padding-left: 10px;
    }
    .pr-sm-10 {
        padding-right: 10px;
    }
   
}

@media screen and (max-width: 400px) {
    .Attendance-history .custom-card .ant-select-selector {
        width: 180px;
    }
}

.Attendance-history .pagination-style {
    margin-top: 40px;
    text-align: right;
}
</style>