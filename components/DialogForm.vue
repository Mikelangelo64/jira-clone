<template>
  <v-dialog max-width="600" @after-leave="handleReset">
    <template #activator="{ props: activatorProps }">
      <v-btn
        class="text-none font-weight-regular"
        prepend-icon="mdi-plus"
        :text="buttonText"
        variant="tonal"
        v-bind="activatorProps"
      />
    </template>

    <template #default="{ isActive }">
      <form @submit="onSubmit">
        <v-card
          prepend-icon="mdi-plus"
          :title="!!taskId ? 'Edit task' : 'Add task'"
        >
          <v-card-text>
            <v-row dense>
              <v-col cols="12" sm="12">
                <v-text-field
                  id="title"
                  v-model="title.value.value"
                  :error-messages="title.errorMessage.value"
                  name="title"
                  label="Title*"
                />
              </v-col>

              <v-col cols="12" sm="12">
                <v-text-field
                  v-model="description.value.value"
                  :error-messages="description.errorMessage.value"
                  label="Description*"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="assignee.value.value"
                  :error-messages="assignee.errorMessage.value"
                  :items="['Mykhaylo', 'Jack', 'Bo']"
                  label="Assignee*"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="reporter.value.value"
                  :error-messages="reporter.errorMessage.value"
                  :items="['Mykhaylo', 'Jack', 'Bo']"
                  label="Reporter*"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="status.value.value"
                  :error-messages="status.errorMessage.value"
                  :items="Object.values(ETaskStatus)"
                  label="Status*"
                />
              </v-col>

              <v-col cols="12" sm="6">
                <v-select
                  v-model="priority.value.value"
                  :error-messages="priority.errorMessage.value"
                  :items="Object.values(ETaskPriority)"
                  label="Priority*"
                />
              </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis"
              >*indicates required field</small
            >
          </v-card-text>

          <v-divider />

          <v-card-actions>
            <v-spacer />

            <v-btn
              text="Close"
              variant="plain"
              type="button"
              @click="
                () => {
                  handleReset();
                  isActive.value = false;
                }
              "
            />

            <v-btn
              color="primary"
              text="Save"
              variant="tonal"
              type="submit"
              @click="
                () => {
                  isActive.value = false;
                }
              "
            />
          </v-card-actions>
        </v-card>
      </form>
    </template>
  </v-dialog>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { useField, useForm } from 'vee-validate';
import { ETaskStatus, ETaskPriority } from '~/types/task';
import type { ITask } from '~/types/task';
import createTaskValidateSchema from '~/validations/task';

interface IProps {
  buttonText?: string;
  taskId?: ITask['id'];
}

const { buttonText, taskId } = defineProps<IProps>();

const appStore = useAppStore();
const { tasks } = storeToRefs(appStore);

const choosedTask = computed<ITask | null>(() => {
  if (!taskId) {
    return null;
  }

  return tasks.value.find(item => item.id === taskId) || null;
});

const schema = toTypedSchema(createTaskValidateSchema());
const { handleSubmit, handleReset } = useForm({
  validationSchema: schema,
  initialValues: choosedTask.value || undefined,
});

const title = useField<string>('title');
const description = useField<string>('description');
const assignee = useField<string>('assignee');
const status = useField<ETaskStatus>('status');
const reporter = useField<string>('reporter');
const priority = useField<ETaskPriority>('priority');

const onSubmit = handleSubmit(values => {
  const id = `${Date.now()}`;

  if (!choosedTask.value) {
    appStore.addTask({ id, ...values });
    return;
  }

  appStore.updateTask({ id: choosedTask.value.id, data: { ...values } });
});
</script>
