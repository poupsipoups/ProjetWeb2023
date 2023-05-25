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
  margin: 1em;
}

.dropdown-toggle {
  margin: auto;
  padding: 0.6em;
  padding-right: 3.5em;
  background-color: #fff;
  border: none;
  border-radius: 1.5em;
  cursor: pointer;
  text-align: left;
  box-shadow: 0 2px 10px #F0AEF6ff, 0 0 0 4px #ffffffeb;
}

.dropdown-toggle::after {
  content: "";
  display: inline-block;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-top-color: #333;
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
}

.dropdown-menu {
  display: none;
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  z-index: 1000;
  width: fit-content;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  background-color: #fff;
  border: none;
  border-radius: 20px;
  transition: opacity 0.3s ease-in-out;
}

.dropdown-menu.show {
  display: block;
}

.dropdown-menu li {
  display: block;
  padding: 5px 10px;
  clear: both;
  font-weight: normal;
  text-align: left;
  color: #333;
  white-space: nowrap;
  margin-bottom: 5px;
}

.dropdown:hover .dropdown-menu {
  display: block;
}

.dropdown-menu li:hover {
  background-color: #f6d7f6 ;
  color:#AF56EBff;
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

  </style>
  