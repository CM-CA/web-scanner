<template>
  <div>
    <!-- Modal para mostrar detalles del CVE -->
    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <h3>{{ modalCveID }}</h3>
        <p>{{ modalCveDetails }}</p>
        <button @click="closeModal">Close</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data() {
    return {
      showModal: false,
      modalCveID: "",
      modalCveDetails: "",
    };
  },
  methods: {
    async openModal(cve) {
      this.showModal = true;
      this.modalCveID = cve;
      try {
        const response = await fetch(`https://vulnerability-scanner2.p.rapidapi.com/cve/${cve}`);
        if (!response.ok) throw new Error("Failed to fetch CVE details");
        const data = await response.json();
        this.modalCveDetails = data.description || "No details available";
      } catch (error) {
        this.modalCveDetails = "Error fetching CVE details";
        console.error(`Error fetching details for ${cve}:`, error);
      }
    },
    closeModal() {
      this.showModal = false;
      this.modalCveID = "";
      this.modalCveDetails = "";
    },
  },
};
</script>

<style scoped>
.modal {
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
}
</style>
