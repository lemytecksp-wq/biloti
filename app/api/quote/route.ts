import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      companyName,
      contactPerson,
      email,
      phone,
      siteName,
      city,
      siteAddress,
      propertyType,
      selectedServices,
      otherServiceText,
      cleaningRequirements,
      howDidYouHear,
      agreedToTerms,
    } = body;

    // Validation
    if (!contactPerson || !email || !phone) {
      return NextResponse.json(
        { success: false, message: 'Step 1 Contact Details are incomplete.' },
        { status: 400 }
      );
    }

    if (!city || !siteAddress || !propertyType) {
      return NextResponse.json(
        { success: false, message: 'Step 2 Site Details are incomplete.' },
        { status: 400 }
      );
    }

    if (!selectedServices || selectedServices.length === 0) {
      return NextResponse.json(
        { success: false, message: 'Please select at least one service required.' },
        { status: 400 }
      );
    }

    if (!agreedToTerms) {
      return NextResponse.json(
        { success: false, message: 'You must acknowledge the Privacy Policy & Terms of Use.' },
        { status: 400 }
      );
    }

    // In production, send formatted email to info@biloti.co.nz and auto-responder to customer
    console.log('Received Commercial Cleaning Service Request Quote for info@biloti.co.nz:', {
      timestamp: new Date().toISOString(),
      contactPerson,
      companyName: companyName || 'N/A',
      email,
      phone,
      siteName: siteName || 'N/A',
      city,
      siteAddress,
      propertyType,
      selectedServices,
      otherServiceText: otherServiceText || 'N/A',
      cleaningRequirements: cleaningRequirements || 'None provided',
      howDidYouHear: howDidYouHear || 'N/A',
    });

    return NextResponse.json({
      success: true,
      message: 'Your Commercial Cleaning Service Request has been successfully submitted! Our team will contact you within 24 hours with your free quote.',
      quoteReference: `BIL-${Math.floor(100000 + Math.random() * 900000)}`,
    });
  } catch (error) {
    console.error('Quote Request Submission Error:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process quote request. Please try calling 021 745 179 directly.' },
      { status: 500 }
    );
  }
}
