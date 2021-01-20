<template>
  <div class="hello">
    <div class="column">
      <div>
        <input
          v-model="filter"
          class="input"
          @keydown.enter="filterSheet(filter)"
        />
      </div>
      <div
        v-for="(sheet, index) in sheets"
        :key="index"
        class="row"
      >
        <div class="title">{{ sheet.title }}</div>
        <div class="description">{{ sheet.description }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WorkSheet',

  data () {
    return {
      filter: '',
      sheets: []
    }
  },

  methods: {
    filterSheet (word) {
      const lower = word.toLowerCase()
      this.sheets = this.workSheets.filter(el => {
        return el.title.toLowerCase().includes(lower) ||
          el.description.toLowerCase().includes(lower)
      })
    }
  },

  watch: {
    filter (word) {
      this.filterSheet(word)
    }
  },

  computed: {
    ...mapState({ workSheets: 'workSheets' })
  },

  mounted () {
    this.sheets = [...this.workSheets]
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.column {
  text-align: left;
}
.input {
  width: 95%;
  padding: 10px;
  margin: 20px;
  color: #DC3545;
}
.row {
  display: flex;
  margin: 20px;
}
.title {
  width: 30%;
  color: #00B36F;
}
.description {
  width: 65%;
  padding-left: 10px;
  color: #715DD6;
}
</style>
