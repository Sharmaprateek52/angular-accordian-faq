import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
    <div class="main">
      <h1>{{ title() }}</h1>
      <div class="accordian-grid">
        @for (data of accordians; track $index) {
          <button class="accordion" (click)="toggleAccordion($index)">{{ data.title }}</button>
          @if (expandedIndex() == $index) {
            <div class="panel">
              <p>{{ data.description }}</p>
            </div>
          }
        }
      </div>
    </div>
  `,
  styleUrl: './app.css',
  standalone: true,
})
export class App {
  protected readonly title = signal('accordian-faq');
  expandedIndex = signal<number | null>(null);

  toggleAccordion(index: number) {
    return this.expandedIndex.update((current) => (current == index ? null : index));
  }

  accordians = [
    { title: 'First Accordian', description: 'This is a simple first accordian' },
    { title: 'Second Accordian', description: 'This is a simple second accordian' },
  ];
}
