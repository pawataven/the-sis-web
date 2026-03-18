// app/composables/usePoetryModal.ts
import { ref } from 'vue'
import type { Poetry } from '~/types/poetry' // อย่าลืมสร้างไฟล์ interface ไว้ตามที่คุยกัน

export const usePoetryModal = () => {
  // สถานะการเปิด/ปิด
  const isOpen = ref<boolean>(false)
  
  // เก็บข้อมูลบทกวีที่ถูกเลือก
  const selectedPoetry = ref<Poetry | null>(null)

  /**
   * ฟังก์ชันสำหรับเปิด Modal
   * @param data ข้อมูลบทกวีที่ส่งมาจากหน้าหลัก
   */
  const openPoetry = (data: Poetry) => {
    selectedPoetry.value = data
    isOpen.value = true
    
    // ป้องกันการ Scroll หน้าหลักเมื่อ Modal เปิด (Optional)
    if (process.client) {
      document.body.style.overflow = 'hidden'
    }
  }

  /**
   * ฟังก์ชันสำหรับปิด Modal
   */
  const closePoetry = () => {
    isOpen.value = false
    
    // คืนค่าการ Scroll (Optional)
    if (process.client) {
      document.body.style.overflow = 'auto'
    }
    
    // ล้างข้อมูลหลังจาก Transition จบ (เพื่อความสวยงาม)
    setTimeout(() => {
      selectedPoetry.value = null
    }, 300)
  }

  return {
    isOpen,
    selectedPoetry,
    openPoetry,
    closePoetry
  }
}