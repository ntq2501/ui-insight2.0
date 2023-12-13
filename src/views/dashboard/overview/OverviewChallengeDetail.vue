<template>
    <Main>
        <div id="overview-tournament-Detail-container">
            <BreadcrumbWrapperStyle>
                <a-breadcrumb>
                    <a-breadcrumb-item>
                        <router-link to="/">Home</router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <router-link to="/dautruong">Đấu trường</router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <router-link to="/dautruong/tongquan">Tổng quan</router-link>
                    </a-breadcrumb-item>
                    <a-breadcrumb-item>
                        <router-link :to="'/dautruong/tongquan/'+statusId">{{ statusContentActive[0].content }}</router-link>
                    </a-breadcrumb-item>
                </a-breadcrumb>
            </BreadcrumbWrapperStyle>
            <a-row :gutter="[30, 30]">
                <a-col :xxl="17" :xl="17" :lg="16" :md="24" :xs="24" :sm="24">
                    <article>
                        <sdHeading as="h5" class="user-info__title">
                            <p class="right-sidebar-title" >Công cụ tìm kiếm</p>
                        </sdHeading>
                        <a-row :gutter="[20,10]">
                            <a-col :xxl="6" :xl="6" :lg="6" :md="12" :xs="24" :sm="24">
                                <sdHeading as="h6" class="user-info__title">
                                    <p class="right-sidebar-title" >Danh mục</p>
                                </sdHeading>
                                <a-space>
                                    <a-select
                                      ref="select"
                                      v-model:value="tournamentSelected"
                                      @change="handleChangeTournament"
                                    >
                                        <a-select-option  v-for="item in optionTournaments" :key="item.id" :value="item.id">
                                            {{ item.content }}
                                        </a-select-option>
                                    </a-select>
                                </a-space>
                            </a-col>
                            <a-col :xxl="6" :xl="6" :lg="6" :md="12" :xs="24" :sm="24">
                                <sdHeading as="h6" class="user-info__title">
                                    <p class="right-sidebar-title" >Trạng thái</p>
                                </sdHeading>
                                <a-space>
                                    <a-select
                                      ref="select"
                                      v-model:value="statusSelected"
                                      @change="handleChangeStatus"
                                    >
                                        <a-select-option v-for="item in optionStatus" :key="item.id" :value="item.id">
                                            {{ item.content }}
                                        </a-select-option>
                                    </a-select>
                                </a-space>
                            </a-col>
                            <a-col :xxl="6" :xl="6" :lg="6" :md="12" :xs="24" :sm="24">
                                <sdHeading as="h6" class="user-info__title">
                                    <p class="right-sidebar-title" >Thời gian</p>
                                </sdHeading>
                                <a-space>
                                    <a-select
                                      ref="select"
                                      v-model:value="timeSelected"
                                      @change="handleChangeTime"
                                    >
                                        <a-select-option  v-for="item in optionTime" :key="item.id" :value="item.id">
                                            {{ item.time }}
                                        </a-select-option>
                                    </a-select>
                                </a-space>
                            </a-col>
                            <a-col :xxl="6" :xl="6" :lg="6" :md="12" :xs="24" :sm="24">
                                <sdHeading as="h6" class="user-info__title">
                                    <p class="right-sidebar-title" >Số lượng người tham gia</p>
                                </sdHeading>
                                <a-space>
                                    <a-select
                                      ref="select"
                                      v-model:value="attendeSelected"
                                      @change="handleChangeAttende"
                                    >
                                        <a-select-option v-for="item in optionAttendees" :key="item.id" :value="item.id">
                                            {{ item.attendees }}
                                        </a-select-option>
                                    </a-select>
                                </a-space>
                            </a-col>
                        </a-row>
                    </article>

                    <article>
                        <a-row justify="space-between">
                            <sdHeading as="h5" class="user-info__title">
                                <p class="right-sidebar-title" >Tổng quan</p>
                            </sdHeading>
                            <div>
                                <a-radio-group v-model:value="tabActive" button-style="solid">
                                  <a-radio-button :value='1'>Giải đấu </a-radio-button>
                                  <a-radio-button :value='2'>Thử thách cá nhân</a-radio-button>
                                  <a-radio-button :value='3'>Solo</a-radio-button>
                                </a-radio-group>
                            </div>
                        </a-row>
                    </article>

                        <h3>Các giải đấu đang diễn ra</h3>
                        <a-table :columns="columns" :data-source="dataFilter">
                            <template #bodyCell="{ column, record }">
                                <template v-if="column.key === 'tournament'">
                                    <a-row align="middle">
                                        <img src="/src/assets/img/avatar.png" style="width: 40px;height: 40px;border-rafius: 5px; margin-right: 5px;" alt="avatar">
                                        <p style="margin-bottom: 0;">{{ record.tournament.content }}</p>
                                    </a-row>
                                </template>
                                <template v-else-if="column.key === 'attendees'">
                                    {{ record.attendees.attendees }} / {{ record.attendees.attendees }}
                                </template>
                                <template v-else-if="column.key === 'language'">
                                    {{ record.language.language }}
                                </template>
                                <template v-else-if="column.key === 'time'">
                                    {{ record.time.time }}
                                </template>
                                <template v-else-if="column.key === 'timeStart'">
                                    {{ record.timeStart.timeStart }}
                                </template>
                                <template v-else-if="column.key === 'elo'">
                                    {{ record.elo.elo }}
                                </template>
                                <template v-else-if="column.key === 'action'">
                                    <span class="table-operation">
                                        <a-dropdown>
                                          <template #overlay>
                                            <a-menu>
                                              <a-menu-item>Chi tiết</a-menu-item>
                                            </a-menu>
                                          </template>
                                          <a>
                                            <span>
                                                <img src="/src/assets/img/more-horizontal-f.png" >
                                            </span>
                                            <down-outlined />
                                          </a>
                                        </a-dropdown>
                                      </span>
                                </template>
                            </template>
                            
                        </a-table>
                </a-col>
    
                <a-col :xxl="7" :xl="7" :lg="8" :md="24" :xs="24" :sm="24">
                    <RightSideBarOverviewChallenge :dataRanking="topRanking"/>
                </a-col>
            </a-row>
        </div>
    </Main>
</template>

<script setup lang="ts">
    import RightSideBarOverviewChallenge from '@/views/dashboard/overview/RightSideBarOverviewChallenge.vue';
    import { reactive, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';
    import router from '@/router';

    const route = useRoute();
    const statusId = ref(route.params.id);

    const tournamentSelected = ref<number>(1);
    const statusSelected = ref<number>(+statusId.value);
    const timeSelected = ref<number>(1);
    const attendeSelected = ref<number>(1);
    const tabActive = ref<number>(1);

    const columns = [
        {
            title: 'Giải đấu',
            dataIndex: 'tournament',
            key: 'tournament',
        },
        {
            title: 'Số người',
            dataIndex: 'attendees',
            key: 'attendees',
            align: 'center',
        },
        {
            title: 'Ngôn ngữ',
            dataIndex: 'language',
            key: 'language',
            align: 'center',
        },
        {
            title: 'Thời gian',
            dataIndex: 'time',
            key: 'time',
            align: 'center',
        },
        {
            title: 'Bắt đầu',
            dataIndex: 'timeStart',
            key: 'timeStart',
            align: 'center',
        },
        {
            title: 'Elo tối thiều',
            dataIndex: 'elo',
            key: 'elo',
            align: 'center',    
        },
        { 
            title: '', 
            key: 'action' 
        },
    ];
    const data = ref([
        {
            id: 1,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: 50
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Javascript',
            },
            timeId: 3,
            time: {
                id: 3,
                time: '120 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '9:30 am',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1250
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'C#',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '7:30 am',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'C#',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '7:30 am',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'C#',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '7:30 am',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '17:30 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 2,
            attendees: {
                id: 2,
                attendees: '5'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'PHP',
            },
            timeId: 3,
            time: {
                id: 3,
                time: '120 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '8:30 am',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'C#',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 3
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 2,
            attendees: {
                id: 2,
                attendees: '5'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1350
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 3,
            attendees: {
                id: 3,
                attendees: '10'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'PHP',
            },
            timeId: 4,
            time: {
                id: 4,
                time: '180 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '16:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1200
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 3
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Javascript',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 4
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'C#',
            },
            timeId: 4,
            time: {
                id: 4,
                time: '180 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 5
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Python',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 3,
            attendees: {
                id: 3,
                attendees: '10',
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Javascript',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 1,
            timeStart: {
                id: 1,
                timeStart: '14:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1100
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 3
        },
        {
            id: 2,
            tournamentId: 2,
            tournament: {
                id: 2,
                content: 'Thử thách cá nhân',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 5
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 6,
            attendees: {
                id: 6,
                attendees: '50'
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 2
        },
        {
            id: 2,
            tournamentId: 3,
            tournament: {
                id: 3,
                content: 'Solo',
            },
            attendeesId: 3,
            attendees: {
                id: 3,
                attendees: '10',
            },
            languageId: 6,
            language: {
                id: 6,
                language: 'Java',
            },
            timeId: 2,
            time: {
                id: 2,
                time: '60 phút',
            },
            timeStartId: 2,
            timeStart: {
                id: 2,
                timeStart: '15:00 pm',
            },
            eloId: 2,
            elo: {
                id: 2,
                elo: 1300
            },
            statusId: 5
        },
    ]);

    const dataRanking = reactive([
        {
            id: 1,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1600,
            attended: 1500,
        },
        {
            id: 2,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 800,
            attended: 1600,
        },
        {
            id: 3,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 2000,
            attended: 2000,
        },
        {
            id: 4,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1900,
            attended: 2100,
        },
        {
            id: 5,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1500,
            attended: 2100,
        },
        {
            id: 6,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1500,
            attended: 2100,
        },
        {
            id: 7,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1500,
            attended: 2100,
        },
        {
            id: 8,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1500,
            attended: 2100,
        },
        {
            id: 9,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1450,
            attended: 2100,
        },
        {
            id: 10,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1350,
            attended: 2100,
        },
        {
            id: 11,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1200,
            attended: 2000,
        },
        {
            id: 12,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1150,
            attended: 1900,
        },
        {
            id: 13,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1290,
            attended: 1990,
        },
        {
            id: 14,
            avatar: '/src/assets/img/avatar.png',
            name: 'Sobin Sam Son',
            elo: 1300,
            attended: 1900,
        },
    ])
    const topRanking = ref(dataRanking.sort((a, b) => b.elo - a.elo).slice(0,10))
    const optionTournaments = reactive([
        {
            id: 1,
            content: 'Giải đấu',
        },
        {
            id: 2,
            content: 'Thử thách cá nhân',
        },
        {
            id: 3,
            content: 'Solo',
        },
    ])
    const optionStatus = reactive([
        {
            id: 2,
            content: 'Đang diễn ra',
        },
        {
            id: 3,
            content: 'Sắp diễn ra',
        },
        {
            id: 4,
            content: 'Đã diễn ra',
        },
        {
            id: 5,
            content: 'Đã hủy',
        },
    ])
    const optionTime = reactive([
        {
            id: 1,
            time: 'Tất cả',
        },
        {
            id: 2,
            time: '60 phút',
        },
        {
            id: 3,
            time: '120 phút',
        },
        {
            id: 4,
            time: '180 phút',
        },
    ])
    const optionAttendees = reactive([
        {
            id: 1,
            attendees: 'Tất cả',
        },
        {
            id: 2,
            attendees: '5',
        },
        {
            id: 3,
            attendees: '10',
        },
        {
            id: 4,
            attendees: '20',
        },
        {
            id: 5,
            attendees: '30',
        },
        {
            id: 6,
            attendees: '50',
        },
    ])

    const statusContentActive = ref(optionStatus.filter((item:any) => item.id == statusSelected.value));
    
    watch(statusSelected, (newVal, oldVal) => {
        router.push({name: 'overviewChallengeDetail', params: {id: statusSelected.value}});
        statusContentActive.value = optionStatus.filter((item:any) => item.id == statusSelected.value);
    })

    const dataFilter = ref(data.value.filter(item => item.statusId === statusSelected.value));
    const handleFilterData = () => {
        dataFilter.value = data.value.filter(item => item.statusId === statusSelected.value);
        if(tournamentSelected.value != 1) {
            dataFilter.value = dataFilter.value.filter(item => item.tournamentId === tournamentSelected.value);
        }
        if(timeSelected.value != 1) {
            dataFilter.value = dataFilter.value.filter(item => item.timeId === timeSelected.value);
        }
        if(attendeSelected.value != 1) {
            dataFilter.value = dataFilter.value.filter(item => item.attendeesId === attendeSelected.value);
        }
    }

    const handleChangeTournament = (value: number) => {
        handleFilterData();
        tabActive.value = tournamentSelected.value;
    };
    const handleChangeStatus = (value: number) => {
        handleFilterData();
    };
    const handleChangeTime = (value: number) => {
        handleFilterData();
    };
    const handleChangeAttende = (value: number) => {
        handleFilterData();
    };

    watch(tabActive, (newValue) => {
        tournamentSelected.value = tabActive.value;
        handleFilterData();
    });
</script>

<style scoped>
#overview-tournament-Detail-container {
    padding: 30px 0 30px 30px ;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > div > div > div > div > div > div > table > tbody > tr > td) {
    padding: 8px 15px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(3) > div > div > div > div > div > div > table > tbody > tr > td > div > p) {
    margin-bottom: 0;
    align-self: center;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article.user-info) {
    padding-bottom: 5px;
    margin-bottom: 10px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article > div > div > h1) {
    font-size: 15px;
    font-weight: 500;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article > div > div > div > div > div),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article > div > div > div > div),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article > div > div > div) {
    width: 100%;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article > div > div > div > div > div > div) {
    border-radius: 8px;
}
:global(#overview-tournament-Detail-container > div) {
    margin-top: 30px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2)) {
    margin-top: 24px;   
}

:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label) {
    background: #dadada;
    border-radius: 15px;
    border: none;
    width: 150px;
    text-align: center;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label:hover) {
    color: #000000;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div) {
    border-radius: 15px;
    background: #dadada;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label > span:nth-child(2)) {
    font-weight: 500;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked) {
    outline: none;
    border: none;
    background: #ffffff;
    Padding: 8px, 24px, 8px, 24px;
    border-radius: 15px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span:nth-child(2)) {
    color: #000000;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label::before) {
    display:none;
}
:global(#app > div > div > section > section > section > main > main) {
    background: #f2f2f2;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(3) > div > div > div) {
    position: relative;
    height: 300px;    
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(3) > div > div > div > img) {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(3)) {
    margin-top: 20px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li) {
    border: none;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li > div > div > div > div:nth-child(1)) {
    display: flex;
    align-items: center;
    padding: 0 10px 0 15px !important;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li > div > div > div > div:nth-child(2) > div > div) {
    padding-left: 12px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li > div > div > div > div:nth-child(2) > div > div > p) {
    margin-bottom: 0;
    font-size: 14px;
    font-weight: 700;
    color: #344767;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li > div > div > div > div:nth-child(2) > div > div > span:nth-child(3)) {
    color: #344767;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li > div > div > div > div > div > div > span:nth-child(2)) {
    padding-right: 4px;
    color: #4CAF50;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article.user-info > div > h1 > p) {
    text-transform: initial;
    font-size: 20px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div) {
    border-radius: 35px;
    overflow: hidden;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div) {
    margin-bottom: 0 !important;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7) {
    padding-right: 0 !important;
}
:global(#overview-tournament-Detail-container > div) {
    margin-right: 0 !important;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article.user-info > div > span) {
    height: fit-content;
    font-size: 16px;
    color: #3895FF;
    cursor: pointer;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > input),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label.ant-radio-button-wrapper.ant-radio-button-wrapper-checked > span.ant-radio-button.ant-radio-button-checked > span),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label > span.ant-radio-button > input),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label > span.ant-radio-button > span),
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label > span.ant-radio-button:focus) {
    border: none !important;
    box-shadow: unset !important;
    outline: none !important;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > div > div > div > ul > li.ant-pagination-item.ant-pagination-item-active) {
    background-color: #21498c !important;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > div > div > div > div) {
    border-radius: 8px;
    overflow: hidden;
    min-height: 623px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > h1 > p) {
    margin-bottom: 5px;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17  > div > div > div > div > div > div > table > thead > tr > th) {
    background: #EB763C;
    color: #ffffff;
    text-align: center;
}
:global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > div > div > div > ul) {
    justify-content: center !important;
    margin-top: 15px !important;
}
@media only screen and (min-width:1000px) and (max-width: 1372px) {
    :global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article > div > div > h1) {
        font-size: 14px;
    }
}

@media screen and (max-width:768px){
    :global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > h3) {
        margin-top: 15px;
    }
    :global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > div > div > div > div > div > div > table > tbody > tr > td > div > img){
        width: 34px !important;
        height: 34px !important;
    }
    :global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(1) > div > div > h1 > p) {
        margin-bottom: 6px;
    }
    :global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-16.ant-col-xl-17.ant-col-xxl-17 > article:nth-child(2) > div > div > div > label) {
        width: unset;
    }
    #overview-tournament-Detail-container {
        padding-left: 15px;
    }
    :global(#overview-tournament-Detail-container > div > div.ant-col.ant-col-xs-24.ant-col-sm-24.ant-col-md-24.ant-col-lg-8.ant-col-xl-7.ant-col-xxl-7 > div > div > div > div > article:nth-child(2) > div > div > div > ul > li > div > div > div > div:nth-child(1)) {
        padding: 0 20px 0 25px !important;
    }
}
</style>