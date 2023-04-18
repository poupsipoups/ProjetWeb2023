<template>
    <div class="dropdown">
      <button class="dropdown-toggle" type="button" @click="toggleDropdown">
        {{ selectedOption ? selectedOption.name : defaultOption }}
      </button>
      <ul class="dropdown-menu" v-show="isOpen">
        <li v-for="(option, index) in options" :key="index" @click="selectOption(option)">
          {{ option.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FilterButton',
    props: {
      options: {
        type: Array,
        required: true
      },
      defaultOption: {
        type: String,
        default: 'Option'
      }
    },
    data() {
      return {
        isOpen: false,
        selectedOption: null
      }
    },
    methods: {
        toggleDropdown() {
            
            if (this.isOpen && this.selectedOption) {
                this.isOpen = false;
            } else {
                this.isOpen = !this.isOpen;
            }
  
        },

      selectOption(option) {
        this.$emit("selection", option);
        this.selectedOption = option;
        this.isOpen = false;
      }
    }
  }
  </script>
  
  <style>
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-toggle {
    padding: 8px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .dropdown-menu {
    display: inline-block !important;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 1000;
    min-width: 160px;
    padding: 5px 0;
    margin: 2px 0 0;
    font-size: 14px;
    text-align: left;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
  }

  .dropdown-menu[style*="display: none"] {
  display: none !important;
}

  
  .dropdown-menu li {
    display: block;
    padding: 5px 10px;
    clear: both;
    font-weight: normal;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
  }
  
  .dropdown-menu li:hover {
    background-color: #f5f5f5;
  }
  
  .dropdown-menu li:first-child {
    margin-top: 0;
  }
  
  .dropdown-menu li:last-child {
    margin-bottom: 0;
  }
  
  .dropdown-menu li a:hover {
    text-decoration: none;
    color: #262626;
    background-color: #f5f5f5;
  }
  
  .dropdown-menu .active a,
  .dropdown-menu .active a:hover {
    color: #fff;
    background-color: #337ab7;
  }
  </style>
  