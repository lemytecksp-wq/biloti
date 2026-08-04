import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { fullName, email, phone, service, message, privacyConsent } = body;

    // Validation
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: 'Please complete all required fields.' },
        { status: 400 }
      );
    }

    if (!privacyConsent) {
      return NextResponse.json(
        { success: false, message: 'Please accept the privacy policy to submit.' },
        { status: 400 }
      );
    }

    // In production, send via email provider to info@biloti.co.nz
    console.log('Received Contact Form Submission for Biloti Property Care:', {
      destination: 'info@biloti.co.nz',
      submittedAt: new Date().toISOString(),
      fullName,
      email,
      phone,
      service: service || 'General Enquiry',
      message,
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you for contacting Biloti Property Care! We have received your message and will respond shortly.',
    });
  } catch (error) {
    console.error('Contact Form Submission Error:', error);
    return NextResponse.json(
      { success: false, message: 'An unexpected error occurred. Please try calling us on 021 745 179.' },
      { status: 500 }
    );
  }
}
