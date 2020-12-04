<template>
    <div class="pagination_bar">

        <ul class="pagination_inner" v-if="pages < maxPages">
            <li class="pagi_item prev_btn">
                <button :disabled="currentPage === 1" @click="pageChanged( currentPage - 1 )">Prev</button>
            </li>
            <li class="pagi_item" :class="{'active':(currentPage === page)}" v-for="page in pages" :key="page">
                <button class="pagi_btn" @click="pageChanged( page )">{{ page }}</button>
            </li>
            <li class="pagi_item next_btn">
                <button :disabled="currentPage === pages" @click="pageChanged( currentPage + 1 )">Next</button>
            </li>
        </ul>

        <ul class="pagination_inner" v-else>
            <li class="pagi_item prev_btn">
                <button :disabled="currentPage === 1" @click="pageChanged( currentPage - 1 )">Prev</button>
            </li>
            <li class="pagi_item" v-if="leftStart > 1">
                <button class="pagi_btn" @click="pageChanged( 1 )">1</button>
            </li>
            <li class="pagi_item" v-if="leftStart > 2">
                <span class="pagi_btn">...</span>
            </li>
            <li class="pagi_item" :class="{'active':(currentPage === page)}" v-for="page in leftPages" :key="page">
                <button class="pagi_btn" @click="pageChanged( page )">{{ page }}</button>
            </li>
            <li class="pagi_item" v-if="leftStop < ( pages - 1 )">
                <span>...</span>
            </li>
            <li class="pagi_item" :class="{'active':(currentPage === page)}" v-for="page in [ pages ]" :key="page">
                <button class="pagi_btn" @click="pageChanged( page )">{{ page }}</button>
            </li>
            <li class="pagi_item next_btn">
                <button :disabled="currentPage === pages" @click="pageChanged( currentPage + 1 )" >Next</button>
            </li>
        </ul>

    </div>
</template>
<script>
export default {
    props: {
        pages: Number,
        current: Number
    },
    data() {
        return {
            maxPages: 6,
            leftPages: [],
            leftStart: 1,
            leftStop: 1,
            currentPage: 0
        };
    },
    methods: {
        prevPagiBtn() {
        },
        nextPagiBtn() {
        },
        pageChanged(currentPage) {
            if (this.currentPage !== currentPage) {
                this.currentPage = currentPage;
                this.generateLeftPages();
                this.$emit("changed", currentPage);
            }
        },
        generateLeftPages() {
            let start = this.currentPage - 1 > 1 ? this.currentPage - 2 : 1;
            let stop = parseInt(this.maxPages) + this.currentPage - 4;
            if (stop < parseInt(this.maxPages)) {
                stop = parseInt(this.maxPages);
            }
            if (stop >= this.pages) {
                const back = stop - this.pages;
                stop = this.pages - 1;
                start = start - back;
            }
            this.leftPages = [];
            this.leftStart = start;
            this.leftStop = stop;
            for (var i = start; i <= stop; i++) {
                this.leftPages.push(i);
            }
        }
    },
    mounted() {
        this.currentPage = this.current;
        this.leftStop = this.pages;
        this.generateLeftPages();
    },
    watch: {
        current(currentPage) {
            this.pageChanged(currentPage);
        }
    }
};
</script>
<style lang="scss" scoped>
.pagination_bar {
    margin-top: 60px;
    @media only screen and (max-width: 991px){
        margin: 30px 0px 50px;
    }
    .pagination_inner {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        position: relative;
        .pagi_item {
            &.active {
                .pagi_btn{
                    background: #EDB11B;
                    color: #fff;
                }
            }
            &.prev_btn, &.next_btn{
                position: absolute;
                top: 50%;
                left: 0;
                transform: translateY(-50%);
                @media only screen and (max-width: 991px){
                    display: none;
                }
                button{
                    border: none;
                    background-color: transparent;
                    outline: none;
                    color: #606060;
                    cursor: pointer;
                    font-size: 16px;
                    &:disabled{
                        cursor: not-allowed;
                        pointer-events: all !important;
                    }
                }
            }
            &.next_btn{
                right: 0;
                left: auto;
            }
            .pagi_btn {
                background-color: transparent;
                color: #606060;
                font-size: 16px;
                width: 30px;
                height: 30px;
                line-height: 30px;
                margin: 0px 3px;
                transition: all ease-in-out 0.4s;
                text-align: center;
                border: none;
                border-radius: 100%;
                cursor: pointer;
                outline: none;
                @media only screen and (max-width: 991px){
                    margin-bottom: 10px;
                }
                &:disabled{
                    cursor: not-allowed;
                    pointer-events: all !important;
                }
                &:hover {
                    background: #EDB11B;
                   color: #fff;
                }
            }
        }
    }
}
</style>