/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

( e => {
const { [ 'ar' ]: { dictionary, getPluralForm } } = {"ar":{"dictionary":{"media widget":"أداة الوسائط","Media URL":"عنوان URL الوسائط","Paste the media URL in the input.":"ألصق عنوان URL الوسائط في موضع الإدخال.","Tip: Paste the URL into the content to embed faster.":"نصيحة: ألصق عنوان URL داخل المحتوى؛ لتسريع عملية التضمين.","The URL must not be empty.":"لا يمكن ترك بيان عنوان URL فارغاً.","This media URL is not supported.":"عنوان URL الوسائط هذا غير مدعوم.","Insert media":"أدخل الوسائط","Media":"وسائط","Media toolbar":"شريط أدوات الوسائط","Open media in new tab":"فتح الوسائط في علامة تبويب جديدة"},getPluralForm(n){return (n == 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);}}};
e[ 'ar' ] ||= { dictionary: {}, getPluralForm: null };
e[ 'ar' ].dictionary = Object.assign( e[ 'ar' ].dictionary, dictionary );
e[ 'ar' ].getPluralForm = getPluralForm;
} )( window.CKEDITOR_TRANSLATIONS ||= {} );
