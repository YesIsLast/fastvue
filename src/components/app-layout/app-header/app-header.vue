<template>
    <a-layout-header id="layout-header">
        <div class="layoutHead-content">
            <a class="layoutHead-content-time">上次登录时间:2019/08/13</a>
            <a class="layoutHead-content-ip">上次登录IP:127.0.0.0</a>
            <a-divider type="vertical" id="layoutHead-content-divider" />
            <a-dropdown>
                <a class="ant-dropdown-link">
                    <a-icon type="idcard" />
                    <span class="layoutHead-content-user">{{ " 用户名" }}</span>
                </a>
                <a-menu slot="overlay">
                    <a-menu-item>
                        <a href="javascript:;">个人信息</a>
                    </a-menu-item>
                    <a-menu-item>
                        <a href="javascript:;">修改密码</a>
                    </a-menu-item>
                </a-menu>
            </a-dropdown>
            <a-divider type="vertical" id="layoutHead-content-divider" />
            <a-tooltip placement="bottom">
                <template slot="title">
                    <span>退出</span>
                </template>
                <a>
                    <a-icon type="poweroff" class="layoutHead-content-poweroff" @click="logout" />
                </a>
            </a-tooltip>
        </div>
    </a-layout-header>
</template>
<script>
export default {
    name: "app-header",
    watch: {},
    data() {
        return {};
    },
    methods: {
        // 退出登录
        logout() {
            this.$router.push({ path: "/login" });
        }
    },
    mounted() {}
};
</script>
<style>
.layoutHead-content {
    display: inline;
    /* float: right; */
    font-size: medium;
}
.layoutHead-content {
    float: right;
}
#layoutHead-content-divider {
    margin-right: 25px;
    font-size: x-large;
}
.layoutHead-content .layoutHead-content-poweroff {
    margin-right: 25px;
}

.layoutHead-content .layoutHead-content-ip {
    margin-right: 25px;
}
.layoutHead-content .layoutHead-content-time {
    margin-right: 25px;
}
.layoutHead-content .layoutHead-content-user {
    margin-right: 25px;
}
#layout-header {
    background: #ffffff;
    box-shadow: 0 0 15px rgba(170, 172, 180, 0.5); /* 设置阴影效果 inset内阴影，未加inset则为外阴影 */
}
</style>
