<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Kiến thức sức khỏe cộng đồng</h1>

    <div class="row">
      <div class="col-sm-4" v-for="(item, index) in items" :key="index">
        <div class="card mb-4">
          <img :src="item.image" class="card-img-top" />

          <div class="card-body">
            <h5 class="card-title">{{ item.title }}</h5>
            <p class="card-text">{{ item.content }}</p>
            <button class="btn btn-info">Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
const items = [
  {
    title: 'KHNews ',
    content: 'Feb-24-2007, 2:00 AM, GMT +7, Square enix introduced about the new out come of the next KHgame in Kingdom hearts series and will be released in next year for north america and europe ' ,
    image: 'https://images.squarespace-cdn.com/content/v1/674f54a350d160336752a565/1733269417458-KNNGWO7RY8LDO49W22QC/thumb-1920-602740.jpg?format=300w'
  },
  {
   title: 'KHNews',
    content: 'Jan-2-2012, 5:00 PM, GMT +7, Kingdom hearts 3D Dream Drop Distance is an action role-playing game developed and published by Square Enix for the Nintendo 3DS. It is the seventh installment in the Kingdom Hearts series and was released in Japan in March 2012 and internationally in July 2012.',
    image: 'https://i.ytimg.com/vi/uv_t2gncZSc/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGH8gMShTMA8=&rs=AOn4CLCd24CBWrFMZ-gf9tEJX_CXpNF-xw'
  },
  {
    title: 'KHNews',
    content: 'Dec-15-2013, 8:00 AM, GMT +7, Kingdom Hearts III is an action role-playing game developed and published by Square Enix for PlayStation 4 and Xbox One. It is the twelfth installment in the Kingdom Hearts series and was released worldwide in January 2019.',
    image: 'https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt1dc45d30c73ebed4/650ea4f740ca7c1dde4b6ab2/Square_20Enix_20Building.jpg/?width=600&auto=webp&quality=80&disable=upscale'
  }   
]
</script>
