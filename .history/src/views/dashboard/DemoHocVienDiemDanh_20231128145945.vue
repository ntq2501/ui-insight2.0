<template>
    <div class="Attendance-history">
        <Main>
            <a-row>
                <a-col :xs="24">
                    <sdCards title="Lịch sử điểm danh">
                        <a-row>
                            <a-col :xxl="6" :xl="12" :lg="12" :md="12" :sm="24" :xs="24">
                                <p class="card-title">Tình trạng</p>
                                <SelectWrapperStyle>
                                    <a-select v-model:value="valueSelected" @focus="focus" ref="select" @change="handleChange">
                                        <a-select-option value="jack">Đúng giờ</a-select-option>
                                        <a-select-option value="lucy">Muộn giờ</a-select-option>
                                        <a-select-option value="no">Không đến</a-select-option>
                                    </a-select>
                                </SelectWrapperStyle>
                            </a-col>
                        <a-row justify="space-between">
                            <a-col >
                                <p class="card-title">Từ ngày</p>
                                <DatePickerWrapper>
                                    <a-date-picker :format="dateFormat" @change="onChange" class="padding-input-date" />
                                </DatePickerWrapper>
                            </a-col>
                            <a-col :xxl="6" :xl="6" :lg="6" :md="6" :sm="12" :xs="12">
                                <p class="card-title">Đến ngày</p>
                                <DatePickerWrapper>
                                    <a-date-picker :format="dateFormat" @change="onChange" class="padding-input-date" />
                                </DatePickerWrapper>
                            </a-col>
                        </a-row>

                        </a-row>
                        <div class="table-attendance">
                            <SalesByLocation />
                        </div>
                        <div class="pagination-style">
                            <a-pagination v-model:current="current1" show-quick-jumper :total="100" @change="onChange" />
                        </div>
                    </sdCards>

                </a-col>
            </a-row>
        </Main>
    </div>
</template>

<script setup lang="ts">
    import { Main } from '../styled';
    import { defineAsyncComponent, ref } from 'vue';

    const dateFormat = ref("DD/MM/YYYY");
    let valueSelected = ref('');
    const current1 = ref<number>(1);
    const focus = () => {
        
    };

    const handleChange = (value: any) => {
    
    };

    const onChange = (date: any, dateString: any) => {
        
    };
    const SalesByLocation = defineAsyncComponent(() => import('./demoOne/SalesByLocationTable.vue'));
    const pageRoutes = [
        {
            path: '/',
            breadcrumbName: 'Dashboard',
        },
        {
            path: '/hocvien/diemdanh',
            breadcrumbName: 'Demo Six',
        },
    ];
</script>

<style>
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

.Attendance-history .card-title {
    margin-bottom: 5px;
}

.Attendance-history .padding-input-date {
    padding: 7px;
}

.Attendance-history .lmeiNC .ant-picker {
    border-color: #E3E6EF !important;
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
@media screen and (max-width: 600px) {
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