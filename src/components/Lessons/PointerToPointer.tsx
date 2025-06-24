import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter/dist/esm";

const PointerToPointer = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-[#f5f6fa] rounded-xl shadow text-gray-800">
      <p className="mb-6 text-lg text-gray-700">
        Bài học này khám phá con trỏ đến con trỏ - một khái niệm nâng cao nhưng rất quan trọng trong C. Con trỏ đến con trỏ cho phép bạn thay đổi địa chỉ mà con trỏ trỏ đến, tạo ra sự linh hoạt cao trong quản lý bộ nhớ và cấu trúc dữ liệu.
      </p>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">I. Khái niệm con trỏ đến con trỏ</h2>
      <p className="mb-4">
        Con trỏ đến con trỏ là một con trỏ lưu trữ địa chỉ của một con trỏ khác. Nó cho phép bạn thay đổi địa chỉ mà con trỏ gốc trỏ đến, không chỉ giá trị tại địa chỉ đó.
      </p>
      
      <div className="bg-blue-50 border-l-4 border-blue-300 p-4 mb-4 text-blue-900">
        <b>Ví dụ đơn giản:</b> Giống như địa chỉ của một hộp thư chứa địa chỉ nhà. Bạn có thể thay đổi địa chỉ nhà trong hộp thư mà không cần biết địa chỉ nhà hiện tại là gì.
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Cú pháp khai báo</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`// Khai báo con trỏ đến con trỏ
dataType **pointer_name;

// Ví dụ cụ thể
int **ptr_to_ptr;     // Con trỏ đến con trỏ int
char **str_ptr;       // Con trỏ đến con trỏ char
float **float_ptr;    // Con trỏ đến con trỏ float

// Khởi tạo
int value = 42;
int *ptr = &value;        // Con trỏ đến value
int **ptr_to_ptr = &ptr;  // Con trỏ đến ptr`}</SyntaxHighlighter>
      </pre>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Minh họa mối quan hệ</h3>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <h4 className="font-semibold mb-2">Sơ đồ mối quan hệ:</h4>
        <div className="text-sm font-mono">
          <p>Biến: <code>value = 42</code></p>
          <p>Địa chỉ: <code>&value = 0x1000</code></p>
          <p>Con trỏ: <code>ptr = &value = 0x1000</code></p>
          <p>Địa chỉ của ptr: <code>&ptr = 0x2000</code></p>
          <p>Con trỏ đến con trỏ: <code>ptr_to_ptr = &ptr = 0x2000</code></p>
          <br/>
          <p><strong>Mối quan hệ:</strong></p>
          <p><code>*ptr_to_ptr</code> = địa chỉ mà ptr trỏ đến (0x1000)</p>
          <p><code>**ptr_to_ptr</code> = giá trị tại địa chỉ đó (42)</p>
          <p><code>*ptr_to_ptr = new_address</code> = thay đổi địa chỉ mà ptr trỏ đến</p>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">II. Ví dụ cơ bản</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Ví dụ đơn giản</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int value = 42;
    int *ptr = &value;
    int **ptr_to_ptr = &ptr;
    
    printf("Giá trị của value: %d\\n", value);
    printf("Địa chỉ của value: %p\\n", (void*)&value);
    printf("Giá trị của ptr (địa chỉ): %p\\n", (void*)ptr);
    printf("Địa chỉ của ptr: %p\\n", (void*)&ptr);
    printf("Giá trị của ptr_to_ptr (địa chỉ): %p\\n", (void*)ptr_to_ptr);
    
    printf("\\nTruy cập giá trị:\\n");
    printf("*ptr = %d\\n", *ptr);
    printf("*ptr_to_ptr = %p\\n", (void*)*ptr_to_ptr);
    printf("**ptr_to_ptr = %d\\n", **ptr_to_ptr);
    
    // Thay đổi giá trị thông qua con trỏ đến con trỏ
    **ptr_to_ptr = 100;
    printf("\\nSau khi thay đổi **ptr_to_ptr = 100:\\n");
    printf("value = %d\\n", value);
    printf("*ptr = %d\\n", *ptr);
    printf("**ptr_to_ptr = %d\\n", **ptr_to_ptr);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc basic_pointer_to_pointer.c -o basic_pointer_to_pointer<br/>
          <span className="text-blue-400">$</span> ./basic_pointer_to_pointer<br/>
          <span className="text-white">Giá trị của value: 42</span><br/>
          <span className="text-white">Địa chỉ của value: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Giá trị của ptr (địa chỉ): 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Địa chỉ của ptr: 0x7fff5fbff8d0</span><br/>
          <span className="text-white">Giá trị của ptr_to_ptr (địa chỉ): 0x7fff5fbff8d0</span><br/>
          <span className="text-white">Truy cập giá trị:</span><br/>
          <span className="text-white">*ptr = 42</span><br/>
          <span className="text-white">*ptr_to_ptr = 0x7fff5fbff8c8</span><br/>
          <span className="text-white">**ptr_to_ptr = 42</span><br/>
          <span className="text-white">Sau khi thay đổi **ptr_to_ptr = 100:</span><br/>
          <span className="text-white">value = 100</span><br/>
          <span className="text-white">*ptr = 100</span><br/>
          <span className="text-white">**ptr_to_ptr = 100</span><br/>
        </div>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">2. Thay đổi địa chỉ mà con trỏ trỏ đến</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>

int main() {
    int value1 = 10;
    int value2 = 20;
    int *ptr = &value1;
    int **ptr_to_ptr = &ptr;
    
    printf("Ban đầu:\\n");
    printf("ptr trỏ đến value1: %d\\n", *ptr);
    printf("ptr_to_ptr trỏ đến ptr: %p\\n", (void*)*ptr_to_ptr);
    
    // Thay đổi địa chỉ mà ptr trỏ đến
    *ptr_to_ptr = &value2;
    
    printf("\\nSau khi thay đổi *ptr_to_ptr = &value2:\\n");
    printf("ptr trỏ đến value2: %d\\n", *ptr);
    printf("ptr_to_ptr trỏ đến ptr: %p\\n", (void*)*ptr_to_ptr);
    
    // Thay đổi giá trị thông qua ptr
    *ptr = 30;
    printf("\\nSau khi thay đổi *ptr = 30:\\n");
    printf("value1 = %d\\n", value1);
    printf("value2 = %d\\n", value2);
    printf("*ptr = %d\\n", *ptr);
    printf("**ptr_to_ptr = %d\\n", **ptr_to_ptr);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc change_pointer.c -o change_pointer<br/>
          <span className="text-blue-400">$</span> ./change_pointer<br/>
          <span className="text-white">Ban đầu:</span><br/>
          <span className="text-white">ptr trỏ đến value1: 10</span><br/>
          <span className="text-white">ptr_to_ptr trỏ đến ptr: 0x7fff5fbff8c8</span><br/>
          <span className="text-white">Sau khi thay đổi *ptr_to_ptr = &value2:</span><br/>
          <span className="text-white">ptr trỏ đến value2: 20</span><br/>
          <span className="text-white">ptr_to_ptr trỏ đến ptr: 0x7fff5fbff8d0</span><br/>
          <span className="text-white">Sau khi thay đổi *ptr = 30:</span><br/>
          <span className="text-white">value1 = 10</span><br/>
          <span className="text-white">value2 = 30</span><br/>
          <span className="text-white">*ptr = 30</span><br/>
          <span className="text-white">**ptr_to_ptr = 30</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">III. Con trỏ đến con trỏ với hàm</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Thay đổi con trỏ trong hàm</h3>
      <p className="mb-4">
        Con trỏ đến con trỏ cho phép hàm thay đổi địa chỉ mà con trỏ gốc trỏ đến, không chỉ giá trị tại địa chỉ đó.
      </p>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <stdlib.h>

// Hàm cấp phát bộ nhớ động
int* allocateMemory(int **ptr_to_ptr) {
    int *new_ptr = (int*)malloc(sizeof(int));
    if (new_ptr != NULL) {
        *new_ptr = 100;
        *ptr_to_ptr = new_ptr;  // Gán địa chỉ mới cho ptr
        printf("Đã cấp phát bộ nhớ: %p\\n", (void*)new_ptr);
    }
    return new_ptr;
}

// Hàm giải phóng bộ nhớ
void freeMemory(int **ptr_to_ptr) {
    if (*ptr_to_ptr != NULL) {
        free(*ptr_to_ptr);
        *ptr_to_ptr = NULL;  // Đặt con trỏ về NULL
        printf("Đã giải phóng bộ nhớ\\n");
    }
}

int main() {
    int *ptr = NULL;
    int **ptr_to_ptr = &ptr;
    
    // Cấp phát bộ nhớ động
    allocateMemory(ptr_to_ptr);
    printf("Sau khi cấp phát: ptr trỏ đến %d\\n", *ptr);
    
    // Giải phóng bộ nhớ
    freeMemory(ptr_to_ptr);
    printf("Sau khi giải phóng: ptr = %p\\n", (void*)ptr);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc function_pointer_to_pointer.c -o function_pointer_to_pointer<br/>
          <span className="text-blue-400">$</span> ./function_pointer_to_pointer<br/>
          <span className="text-white">Đã cấp phát bộ nhớ: 0x7f8b2bc02a70</span><br/>
          <span className="text-white">Sau khi cấp phát: ptr trỏ đến 100</span><br/>
          <span className="text-white">Đã giải phóng bộ nhớ</span><br/>
          <span className="text-white">Sau khi giải phóng: ptr = (nil)</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">IV. Ứng dụng thực tế</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">1. Danh sách liên kết đơn giản</h3>
      <pre className="bg-gray-100 p-4 border-l-4 border-blue-500 overflow-x-auto rounded mb-4">
        <SyntaxHighlighter language="c">{`#include <stdio.h>
#include <stdlib.h>

typedef struct Node {
    int data;
    struct Node *next;
} Node;

// Thêm node vào đầu danh sách
void insertAtBeginning(Node **head, int data) {
    Node *new_node = (Node*)malloc(sizeof(Node));
    if (new_node == NULL) {
        return;  // Lỗi
    }
    
    new_node->data = data;
    new_node->next = *head;
    *head = new_node;  // Thay đổi head
}

// Xóa node đầu tiên
void deleteFirst(Node **head) {
    if (*head == NULL) {
        return;  // Danh sách rỗng
    }
    
    Node *temp = *head;
    *head = (*head)->next;  // Thay đổi head
    free(temp);
}

// In danh sách
void printList(Node *head) {
    Node *current = head;
    while (current != NULL) {
        printf("%d -&gt; ", current->data);
        current = current->next;
    }
    printf("NULL\\n");
}

int main() {
    Node *head = NULL;
    
    // Thêm các phần tử
    insertAtBeginning(&head, 30);
    insertAtBeginning(&head, 20);
    insertAtBeginning(&head, 10);
    
    printf("Danh sách ban đầu:\\n");
    printList(head);
    
    // Xóa phần tử đầu
    deleteFirst(&head);
    printf("\\nSau khi xóa phần tử đầu:\\n");
    printList(head);
    
    return 0;
}`}</SyntaxHighlighter>
      </pre>
      
      <div className="bg-black text-green-400 p-4 rounded mb-4 font-mono text-sm">
        <div className="flex items-center mb-2">
          <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-gray-400">Terminal</span>
        </div>
        <div className="text-green-400">
          <span className="text-blue-400">$</span> gcc linked_list.c -o linked_list<br/>
          <span className="text-blue-400">$</span> ./linked_list<br/>
          <span className="text-white">Danh sách ban đầu:</span><br/>
          <span className="text-white">10 -&gt; 20 -&gt; 30 -&gt; NULL</span><br/>
          <span className="text-white">Sau khi xóa phần tử đầu:</span><br/>
          <span className="text-white">20 -&gt; 30 -&gt; NULL</span><br/>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">V. Lưu ý quan trọng</h2>
      
      <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">Các lỗi thường gặp</h3>
            <div className="mt-2 text-sm text-red-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Không khởi tạo con trỏ đến con trỏ trước khi sử dụng</li>
                <li>Nhầm lẫn giữa *ptr_to_ptr và **ptr_to_ptr</li>
                <li>Không kiểm tra NULL trước khi truy cập</li>
                <li>Memory leak khi không giải phóng bộ nhớ đúng cách</li>
                <li>Thay đổi địa chỉ mà không cần thiết</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-green-800">Lưu ý</h3>
            <div className="mt-2 text-sm text-green-700">
              <ul className="list-disc list-inside space-y-1">
                <li>Luôn khởi tạo con trỏ đến con trỏ với NULL hoặc địa chỉ hợp lệ</li>
                <li>Hiểu rõ sự khác biệt giữa *ptr_to_ptr và **ptr_to_ptr</li>
                <li>Kiểm tra NULL trước khi truy cập con trỏ</li>
                <li>Sử dụng con trỏ đến con trỏ một cách có mục đích</li>
                <li>Quản lý bộ nhớ cẩn thận khi sử dụng cấp phát động</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-700 mt-6 mb-2">VI. Bài tập thực hành</h2>
      
      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 1: Quản lý mảng động</h3>
      <p className="mb-4">Viết hàm <code>manageArray(int **array, int *size, int action, int value)</code> để thêm/xóa phần tử trong mảng động.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>action = 1: thêm phần tử, action = 2: xóa phần tử</li>
          <li>Sử dụng realloc để thay đổi kích thước mảng</li>
          <li>Cập nhật size thông qua con trỏ</li>
          <li>Kiểm tra lỗi cấp phát bộ nhớ</li>
        </ul>
      </div>

      <h3 className="text-xl font-semibold text-blue-600 mt-4 mb-2">Bài tập 2: Đảo ngược danh sách liên kết</h3>
      <p className="mb-4">Viết hàm <code>reverseList(Node **head)</code> đảo ngược danh sách liên kết sử dụng con trỏ đến con trỏ.</p>
      <div className="bg-gray-100 p-4 rounded mb-4">
        <p className="text-sm text-gray-600 mb-2"><strong>Gợi ý:</strong></p>
        <ul className="text-sm text-gray-600 list-disc list-inside space-y-1">
          <li>Sử dụng 3 con trỏ: prev, current, next</li>
          <li>Cập nhật head thông qua con trỏ đến con trỏ</li>
          <li>Duyệt danh sách và đảo ngược các liên kết</li>
        </ul>
      </div>

      <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              <strong>Thử thách:</strong> Hãy thực hành các bài tập trên và thử nghiệm với các cấu trúc dữ liệu khác nhau. Con trỏ đến con trỏ mở ra khả năng tạo ra các cấu trúc dữ liệu động phức tạp!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PointerToPointer;
