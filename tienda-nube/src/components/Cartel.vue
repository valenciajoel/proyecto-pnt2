<template>
    <div class="cartel" @click.self="$emit('close')">
      <div class="cartel-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <style scoped>
  .cartelRegistro {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    padding-top: 400px;
    
  }

  .cartelLogin {
    position:fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: auto;
    
  }
  
  .cartel-content {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  }
 
  </style>
  