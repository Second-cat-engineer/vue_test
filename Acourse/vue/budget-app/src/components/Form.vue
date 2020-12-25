<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" label-position="top">
      <ElFormItem label="Категория" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type...">
          <ElOption label="Доход" value="INCOME"/>
          <ElOption label="Расход" value="OUTCOME"/>
        </ElSelect>
      </ElFormItem>

      <ElFormItem label="Комментарий" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>

      <ElFormItem label="Сумма" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>

      <ElButton @click="onSubmit" type="primary">Submit</ElButton>

    </ElForm>
  </ElCard>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        type: 'INCOME',
        comment: '',
        value: 0,
      },
      rules: {
        type: [
          { required: true, message: 'Please select type', trigger: 'submit'},
        ],
        comment: [
          { required: true, message: 'Введите комментарий', trigger: 'change'},
        ],
        value: [
          { required: true, message: 'Введите сумму', trigger: 'blur'},
          { type: 'number', message: 'Сумма должна быть числом', trigger: 'blur'},
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.$refs.addItemForm.validate(valid => {
        if (valid) {
          if (this.formData.type === 'OUTCOME' && this.formData.value > 0) {
            this.formData.value = Number('-' + this.formData.value);
          }

          this.$emit('submitForm', {...this.formData});
          this.$refs.addItemForm.resetField();
        }
      });
    },
  },
}
</script>

<style scoped>
.form-card {
  max-width: 500px;
  margin: auto;
}

.type-select {
  width: 100%;
}
</style>